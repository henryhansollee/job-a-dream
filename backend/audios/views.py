import os

from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Audio, AudioResult
from .serializers import AudioSerializer
from .STT_API_version import transcribe_file

# Create your views here.
class AudioListAPI(APIView):
    
    def get(self, request):
        serializer = AudioSerializer(Audio.objects.filter(writer=request.user), many=True)
        return Response(serializer.data, status=200)

    def post(self, request):
        serializer = AudioSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(writer=request.user)

            result_data = request.data.dict()
            script = transcribe_file(str(result_data['audio_file']))
            print('여기 보세요~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            print(script)
            audio_queryset = AudioResult.objects.create(script=script)
            serializer.save(result=audio_queryset)
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