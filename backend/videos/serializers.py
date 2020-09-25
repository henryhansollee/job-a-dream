import os
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Video, Tag, Question, Result
from .captures import get_thumbnail

class VideoSerializer(serializers.ModelSerializer):

    tag = serializers.SlugRelatedField(many=True, slug_field='name', read_only=True)
    update_tag = serializers.ListField(
        child=serializers.CharField(max_length=10), write_only=True
    )

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
        writer = self.context['request'].user
        tags = []
        for name in tag_name:
            tag, created = Tag.objects.get_or_create(name=name)
            tags.append(tag)
        instance.tag.set(tags)
        return instance

    class Meta:
        model = Video
        exclude = []
        read_only_fields = ['writer']

class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        exclude = []

class ResultSerializer(serializers.ModelSerializer):

    class Meta:
        model = Result
        exclude = []