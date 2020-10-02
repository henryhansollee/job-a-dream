from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from questions.models import Question

# Create your models here.
class TimeStampModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Tag(TimeStampModel):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Gaze(models.Model):
    blinking = models.IntegerField(default=0)
    left = models.IntegerField(default=0)
    right = models.IntegerField(default=0)
    center = models.IntegerField(default=0)

class HeadPosition(models.Model):
    bottom = models.IntegerField(default=0)
    top = models.IntegerField(default=0)
    right = models.IntegerField(default=0)
    left = models.IntegerField(default=0)

class Emotion(models.Model):
    angry = models.IntegerField(default=0)
    disgusted = models.IntegerField(default=0)
    fearful = models.IntegerField(default=0)
    happy = models.IntegerField(default=0)
    neutral = models.IntegerField(default=0)
    sad = models.IntegerField(default=0)
    surprised = models.IntegerField(default=0)

class VideoResult(TimeStampModel):
    gaze = models.ForeignKey(Gaze, on_delete=models.CASCADE, blank=True)
    emotions = models.ForeignKey(Emotion, on_delete=models.CASCADE, blank=True)
    head = models.ForeignKey(HeadPosition, on_delete=models.CASCADE, blank=True)

class Video(TimeStampModel):
    title = models.CharField(max_length=30)
    video_file = models.FileField(upload_to='videos', blank=True)
    tag = models.ManyToManyField(Tag, blank=True)
    writer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    result = models.ForeignKey(VideoResult, on_delete=models.CASCADE, null=True, blank=True)
