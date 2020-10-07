from rest_framework.response import Response
from rest_framework.views import APIView

from videos.models import Gaze, Emotion, HeadPosition

class ResultAPI(APIView):

    # blinking = models.IntegerField(default=0)
    # left = models.IntegerField(default=0)
    # right = models.IntegerField(default=0)
    # center = models.IntegerField(default=0)

    def get(self, request):
        gaze_blinking = Gaze.objects.all().aggregate(Avg('blinking'))

        return Response()
