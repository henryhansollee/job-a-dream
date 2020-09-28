from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Board
from .serializers import BoardSerializer

class BoardListAPI(APIView):

    def get(self, request):
        serializer = BoardSerializer(Board.objects.filter(writer=request.user), many=True)
        print('요청옴?????')
        return Response(serializer.data, status=200)
    
    def post(self, request):
        serializer = BoardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(writer=request.user)
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