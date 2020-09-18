import os
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Video, Tag
from .captures import get_thumbnail

class WriterSerialzer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ['email']

class VideoSerializer(serializers.ModelSerializer):
    # writer = WriterSerialzer
    tag = serializers.SlugRelatedField(many=True, slug_field='name', read_only=True)
    update_tag = serializers.ListField(
        child=serializers.CharField(max_length=10), write_only=True
    )

    def create(self, validated_data):
        tag_name = validated_data.pop('update_tag')
        instance = super().create(validated_data)
        writer = self.context['request'].user
        tags = []
        for name in tag_name:
            tag, created = Tag.objects.get_or_create(name=name)
            tags.append(tag)
        instance.tag.set(tags)
        vid = validated_data.pop('video_file')
        # vid = self.context['request'].FILES.getlist('video_file')
        print('\n\n\n\n')
        print(vid)
        print('\n\n\n\n')
        get_thumbnail(vid, writer.id)

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


# Thumbnail 모델을 만들어서
# image 필드에 blank=True 옵션주고
# Video 모델에 thumbnail = models.Foreignkey(Thumbnail, on_delete=models.CASCADE)
# serializer 와서
# craete 부분에서
# 동영상 불러오고
# 썸네일 추출해서
# Video.objests.create(thumbnail=)