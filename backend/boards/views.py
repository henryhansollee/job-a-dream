from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from questions.models import Question
from .models import Board, BoardResult
from .serializers import BoardSerializer
from .main import question_generator

class BoardListAPI(APIView):

    def get(self, request):
        serializer = BoardSerializer(Board.objects.filter(writer=request.user), many=True)
        return Response(serializer.data, status=200)
    
    def post(self, request):
        serializer = BoardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(writer=request.user)

            result = question_generator(request.data['content'])
            print(result)
            
            if len(result) == 0:
                return Response('질문 추출 불가')
            elif len(result) == 1:
                board_result_queryset = BoardResult.objects.create(q1=result[0])
                Question.objects.create(content=result[0], writer=request.user)
            elif len(result) == 2:
                board_result_queryset = BoardResult.objects.create(q1=result[0], q2=result[1])
                Question.objects.create(content=result[0], writer=request.user)
                Question.objects.create(content=result[1], writer=request.user)
            elif len(result) == 3:
                board_result_queryset = BoardResult.objects.create(q1=result[0], q2=result[1], q3=result[2])
                Question.objects.create(content=result[0], writer=request.user)
                Question.objects.create(content=result[1], writer=request.user)
                Question.objects.create(content=result[2], writer=request.user)

            serializer.save(questions=board_result_queryset)

            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class BoardDetailAPI(APIView):

    def get(self, request, pk):
        serializer = BoardSerializer(Board.objects.get(pk=pk))
        return Response(serializer.data, status=200)

    def put(self, request, pk):
        serializer = BoardSerializer(Board.objects.get(pk=pk), data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        board = Board.objects.get(pk=pk)
        board.delete()
        return Response('삭제되었습니다.')