from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Video

class WriterSerialzer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ['email']

class VideoSerializer(serializers.ModelSerializer):
    writer = WriterSerialzer

    class Meta:
        model = Video
        fields = [
            'title',
            'thumbnail',
            'video_file',
            'tag_set',
            'created_at',
            'updated_at'
        ]