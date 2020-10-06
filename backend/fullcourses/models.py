from django.db import models
from django.conf import settings
from questions.models import Question
from videos.models import Gaze, Emotion, HeadPosition

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

class FullCourseResult(TimeStampModel):
    gaze = models.ForeignKey(Gaze, on_delete=models.CASCADE, blank=True)
    emotions = models.ForeignKey(Emotion, on_delete=models.CASCADE, blank=True)
    head = models.ForeignKey(HeadPosition, on_delete=models.CASCADE, blank=True)
    script = models.TextField(blank=True)
    confidence = models.FloatField(blank=True)

class Dictionary(models.Model):
    key = models.TextField(blank=True)
    value = models.IntegerField(blank=True)
    result = models.ForeignKey(FullCourseResult, related_name='nouns', on_delete=models.CASCADE)

class FullCourse(TimeStampModel):
    title = models.CharField(max_length=30)
    subject = models.CharField(max_length=100)
    content = models.TextField()
    video_file = models.FileField(upload_to='videos', blank=True)
    audio_file = models.FileField(upload_to='audios', blank=True)
    tag = models.ManyToManyField(Tag, blank=True)
    writer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    result = models.ForeignKey(FullCourseResult, on_delete=models.CASCADE, null=True)