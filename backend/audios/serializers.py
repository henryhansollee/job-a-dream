from rest_framework import serializers
from .models import Audio, AudioResult, Tag

class AudioResultSerializer(serializers.ModelSerializer):

    class Meta:
        model = AudioResult
        exclude = ['id', 'created_at', 'updated_at']

class AudioSerializer(serializers.ModelSerializer):
    
    tag = serializers.SlugRelatedField(many=True, slug_field='name', read_only=True)
    update_tag = serializers.ListField(
        child=serializers.CharField(max_length=100), write_only=True
    )
    result = AudioResultSerializer(required=False)

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
        model = Audio
        exclude = []
        read_only_fields = ['writer', 'result']

