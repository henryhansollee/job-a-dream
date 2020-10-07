from django.db.models import Avg

from rest_framework.response import Response
from rest_framework.views import APIView

from videos.models import Gaze, Emotion, HeadPosition, Video, VideoResult
from audios.models import Audio, Result
from fullcourses.models import FullCourse

class ResultAPI(APIView):

    def get(self, request):
        
        angry = disgusted = fearful = happy = neutral = sad = surprised = 0
        gaze_blinking = gaze_left = gaze_right = gaze_center = 0
        head_bottom = head_top = head_right = head_left = 0
        count = 0

        for video_result in Video.objects.filter(writer=request.user):
            angry += video_result.result.emotions.angry
            disgusted += video_result.result.emotions.disgusted
            fearful += video_result.result.emotions.fearful
            happy += video_result.result.emotions.happy
            neutral += video_result.result.emotions.neutral
            sad += video_result.result.emotions.sad
            surprised += video_result.result.emotions.surprised

            gaze_blinking += video_result.result.gaze.blinking
            gaze_left += video_result.result.gaze.left
            gaze_right += video_result.result.gaze.right
            gaze_center += video_result.result.gaze.center

            head_bottom += video_result.result.head.bottom
            head_top += video_result.result.head.top
            head_right += video_result.result.head.right
            head_left += video_result.result.head.left

            count += 1

        for fullcourse_result in FullCourse.objects.filter(writer=request.user):
            angry += fullcourse_result.result.emotions.angry
            disgusted += fullcourse_result.result.emotions.disgusted
            fearful += fullcourse_result.result.emotions.fearful
            happy += fullcourse_result.result.emotions.happy
            neutral += fullcourse_result.result.emotions.neutral
            sad += fullcourse_result.result.emotions.sad
            surprised += fullcourse_result.result.emotions.surprised

            gaze_blinking += fullcourse_result.result.gaze.blinking
            gaze_left += fullcourse_result.result.gaze.left
            gaze_right += fullcourse_result.result.gaze.right
            gaze_center += fullcourse_result.result.gaze.center

            head_bottom += fullcourse_result.result.head.bottom
            head_top += fullcourse_result.result.head.top
            head_right += fullcourse_result.result.head.right
            head_left += fullcourse_result.result.head.left

            count += 1

        context = {
            'gaze': {
                'blinking': gaze_blinking / count,
                'left': gaze_left / count,
                'right': gaze_right / count,
                'center': gaze_center / count
            },
            'emotions': {
                'angry': angry / count,
                'disgusted': disgusted / count,
                'fearful': fearful / count,
                'happy': happy / count,
                'neutral': neutral /count,
                'sad': sad / count,
                'surprised': surprised / count
            },
            'head': {
                'bottom': head_bottom / count,
                'top': head_top / count,
                'right': head_right / count,
                'left': head_left / count,
            }
        }

        return Response(context, status=200)
