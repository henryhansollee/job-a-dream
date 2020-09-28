import os

from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Audio
from .serializers import AudioSerializer

# Create your views here.
class AudioListAPI(APIView):
    
    def get(self, request):
        serializer = AudioSerializer(Audio.objects.filter(writer=request.user), many=True)
        return Response(serializer.data, status=200)

    def post(self, request):
        serializer = AudioSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(writer=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class AudioDetailAPI(APIView):

    def get(self, request, pk):
        serializer = AudioSerializer(Audio.objects.get(pk=pk))
        return Response(serializer.data, status=200)

    def delete(self, request, pk):
        audio = Audio.objects.get(pk=pk)
        audio.delete()
        return Response('삭제되었습니다.')    