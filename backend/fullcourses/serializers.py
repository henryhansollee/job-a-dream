from rest_framework import serializers

from videos.serializers import GazeSerializer, EmotionSerializer, HeadPositionSerializer
from questions.serializers import QuestionSerializer

from .models import FullCourse, FullCourseResult, Dictionary, Tag


class DictionarySerializer(serializers.ModelSerializer):

    class Meta:
        model = Dictionary
        exclude = ['id']

class ResultSerializer(serializers.ModelSerializer):
    gaze = GazeSerializer()
    emotions = EmotionSerializer()
    head = HeadPositionSerializer()
    nouns = DictionarySerializer(many=True, read_only=True)

    class Meta:
        model = FullCourseResult
        exclude = ['id', 'created_at', 'updated_at']

class FullCourseSerializer(serializers.ModelSerializer):
    
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
        return instance

    class Meta:
        model = FullCourse
        exclude = []
        read_only_fields = ['writer', 'result', 'question']