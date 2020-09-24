import os

from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Video, Question, Result
from .serializers import VideoSerializer, QuestionSerializer, ResultSerializer

from .AI.vision.GazeTracking.example import analyze_eye_tracking
from django.http.request import QueryDict


class VideoListAPI(APIView):

    def get(self, request):
        serializer = VideoSerializer(Video.objects.filter(writer=request.user), many=True)
        return Response(serializer.data, status=200)
    
    def post(self, request):
        serializer = VideoSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save(writer=request.user)
            result_data = request.data.dict()
            print(str(result_data['video_file']))
            result_data['sight_analysis'] = str(analyze_eye_tracking(str(result_data['video_file'])))
            result_querydict = QueryDict('', mutable=True)
            result_querydict.update(result_data)
            result_serializer = ResultSerializer(data=result_querydict)

            if result_serializer.is_valid():
                result_serializer.save()
            else:
                return Response(result_serializer.errors, status=400)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@permission_classes([IsAuthenticated])
@authentication_classes([JSONWebTokenAuthentication])
class VideoDetailAPI(RetrieveUpdateDestroyAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

class QuestionAPI(APIView):

    def get(self, request):
        serializer = QuestionSerializer(Question.objects.all(), many=True)
        return Response(serializer.data, status=200)
    
    def post(self, request):
        serializer = QuestionSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
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

class ResultAPI(APIView):

    def get(self, request):
        serializer = ResultSerializer(Result.objects.all(), many=True)
        return Response(serializer.data, status=200)