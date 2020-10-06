import os

from django.conf import settings
from django.http import QueryDict

from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from questions.models import Question

from .models import Audio, Result, Dictionary
from .serializers import AudioSerializer, ResultSerializer, DictionarySerializer
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
            data = transcribe_file(str(result_data['audio_file']))
            
            result = Result.objects.create(script=data[0], confidence=data[1])

            for key, value in data[2].items():
                Dictionary.objects.create(key=key, value=value, result=result)

            os.remove(os.path.join(settings.MEDIA_ROOT+'audios/'+str(request.data['audio_file'])))

            serializer.save(result=result, question=Question.objects.get(pk=request.data['question']))

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