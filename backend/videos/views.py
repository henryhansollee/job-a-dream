import os

from django.conf import settings

from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from questions.models import Question

from .models import Video, Gaze, Emotion, HeadPosition, VideoResult
from .serializers import VideoSerializer, ResultSerializer

from .vision.GazeTracking.example import analyze_eye_tracking
from .vision.Emotion_detection_prev.src import check_emotion
from .vision.Proctoring_AI.head_pose_estimation import get_head_position
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
            video = str(result_data['video_file'])
            
            gaze = analyze_eye_tracking(video)
            gaze_queryset = Gaze.objects.create(blinking=gaze[0], left=gaze[1], right=gaze[2], center=gaze[3])
            emotion = check_emotion.get_emotion(video)
            emotion_queryset = Emotion.objects.create(
                angry=emotion['Angry'], 
                disgusted=emotion['Disgusted'], 
                fearful=emotion['Fearful'], 
                happy=emotion['Happy'], 
                neutral=emotion['Neutral'], 
                sad=emotion['Sad'], 
                surprised=emotion['Surprised']
            )
            head = get_head_position(video)
            head_queryset = HeadPosition.objects.create(bottom=head[0], top=head[1], right=head[2], left=head[3])
            
            video_result_queryset = VideoResult.objects.create(gaze=gaze_queryset, emotions=emotion_queryset, head=head_queryset)
            
            os.remove(os.path.join(settings.MEDIA_ROOT+'videos/'+str(request.data['video_file'])))

            serializer.save(result=video_result_queryset, question=Question.objects.get(pk=request.data['question']))
            
            return Response(serializer.data, status=201)
        print(serializer.errors)
        return Response(serializer.errors, status=400)

class VideoDetailAPI(RetrieveUpdateDestroyAPIView):
    
    def get(self, request, pk):
        serializer = VideoSerializer(Video.objects.get(pk=pk))
        # print(serializer.data['title'])
        return Response(serializer.data, status=200)

    def delete(self, request, pk):
        video = Video.objects.get(pk=pk)
        video.delete()
        return Response('삭제되었습니다.', status=204)

class ResultAPI(APIView):

    def get(self, request):
        serializer = ResultSerializer(VideoResult.objects.all(), many=True)
        return Response(serializer.data, status=200)