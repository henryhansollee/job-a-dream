from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Question
from .serializers import QuestionSerializer

# Create your views here.
class QuestionListAPI(APIView):

    def get(self, request):
        serializer = QuestionSerializer(Question.objects.filter(writer=request.user), many=True)
        return Response(serializer.data, status=200)
    
    def post(self, request):
        serializer = QuestionSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save(writer=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
    def put(self, request, pk):
        serializer = QuestionSerializer(Question.objects.get(pk=pk), data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        question = Question.objects.get(pk=pk)
        question.delete()
        return Response('삭제되었습니다.', status=204)