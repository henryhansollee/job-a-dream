import os

from django.conf import settings

from rest_framework.response import Response
from rest_framework.views import APIView

from videos.models import Gaze, Emotion, HeadPosition
from videos.vision.GazeTracking.example import analyze_eye_tracking
from videos.vision.Emotion_detection_prev.src import check_emotion
from videos.vision.Proctoring_AI.head_pose_estimation import get_head_position
from audios.STT_API_version import transcribe_file

from .models import FullCourse, FullCourseResult, Dictionary
from .serializers import FullCourseSerializer, ResultSerializer
from .main import question_generator


class FullCourseListAPI(APIView):

    def get(self, request):
        serializer = FullCourseSerializer(FullCourse.objects.filter(writer=request.user), many=True)
        return Response(serializer.data, status=200)
    
    def post(self, request):
        serializer = FullCourseSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save(writer=request.user)

            result_data = request.data.dict()
            video = str(result_data['video_file'])
            audio = transcribe_file(str(result_data['audio_file']))

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
            
            fullcourse_result_queryset = FullCourseResult.objects.create(gaze=gaze_queryset, emotions=emotion_queryset, head=head_queryset, script=audio[0], confidence=audio[1])

            for key, value in audio[2].items():
                Dictionary.objects.create(key=key, value=value, result=fullcourse_result_queryset)

            os.remove(os.path.join(settings.MEDIA_ROOT+'videos/'+str(request.data['video_file'])))
            os.remove(os.path.join(settings.MEDIA_ROOT+'audios/'+str(request.data['audio_file'])))

            serializer.save(result=fullcourse_result_queryset)

            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class FullCourseDetailAPI(APIView):

    def get(self, request, pk):
        serializer = FullCourseSerializer(FullCourse.objects.get(pk=pk))
        return Response(serializer.data, status=200)

    def delete(self, request, pk):
        fullcourse = FullCourse.objects.get(pk=pk)
        fullcourse.delete()
        return Response('삭제되었습니다.')    