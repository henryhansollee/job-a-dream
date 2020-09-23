from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Video, Question
from .serializers import VideoSerializer, QuestionSerializer

from .AI.vision.GazeTracking.example import analyze_eye_tracking


class VideoListAPI(APIView):

    def get(self, request):
        serializer = VideoSerializer(Video.objects.filter(writer=request.user), many=True)
        return Response(serializer.data, status=200)
    
    def post(self, request):
        serializer = VideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(writer=request.user)
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
<<<<<<< HEAD
        return Response(serializer.data, status=200)

class StatisticsAPI(APIView):

    def get(self, request):
        obj = Video.objects.get(id=8)
        print(obj.video_file, 'asdfasfsdf')
        result = analyze_eye_tracking('하하하.webm')
        print(result)
        return
=======
        print(serializer)
        return Response(serializer.data, status=200)
>>>>>>> develop
