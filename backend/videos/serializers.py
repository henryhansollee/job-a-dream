import os
from django.contrib.auth import get_user_model

from rest_framework import serializers

from questions.serializers import QuestionSerializer

from .models import Video, Tag, Gaze, Emotion, HeadPosition, VideoResult

class GazeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Gaze
        exclude = ['id']

class EmotionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Emotion
        exclude = ['id']

class HeadPositionSerializer(serializers.ModelSerializer):

    class Meta:
        model = HeadPosition
        exclude = ['id']

class ResultSerializer(serializers.ModelSerializer):
    gaze = GazeSerializer()
    emotions = EmotionSerializer()
    head = HeadPositionSerializer()

    class Meta:
        model = VideoResult
        exclude = ['id', 'created_at', 'updated_at']

class VideoSerializer(serializers.ModelSerializer):
    tag = serializers.SlugRelatedField(many=True, slug_field='name', read_only=True)
    update_tag = serializers.ListField(
        child=serializers.CharField(max_length=100), write_only=True
    )
    result = ResultSerializer(required=False)
    question = QuestionSerializer(required=False)

    def create(self, validated_data):
        tag_name = validated_data.pop('update_tag')
        instance = super().create(validated_data)
        tags = []
        for name in tag_name:
            tag, created = Tag.objects.get_or_create(name=name)
            tags.append(tag)
        instance.tag.set(tags)

        return instance
    
    def update(self, instance, validated_data):
        tag_name = validated_data.pop('update_tag')
        instance = super().update(instance, validated_data)
        tags = []
        for name in tag_name:
            tag, created = Tag.objects.get_or_create(name=name)
            tags.append(tag)
        instance.tag.set(tags)
        instance.result = validated_data.get('result', instance.result)
        instance.save()
        return instance

    class Meta:
        model = Video
        exclude = []
        read_only_fields = ['writer', 'result', 'question']