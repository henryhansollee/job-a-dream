from django.db import models
from django.conf import settings
from questions.models import Question

# Create your models here.
class TimeStampModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Tag(TimeStampModel):
    name = models.CharField(max_length=100, unique=True)

class Result(models.Model):
    script = models.TextField(blank=True)
    confidence = models.FloatField(blank=True)

class Dictionary(models.Model):
    key = models.TextField(blank=True)
    value = models.IntegerField(blank=True)
    result = models.ForeignKey(Result, related_name='nouns', on_delete=models.CASCADE)

class Audio(TimeStampModel):
    title = models.CharField(max_length=30)
    audio_file = models.FileField(upload_to='audios', blank=True)
    tag = models.ManyToManyField(Tag, blank=True)
    writer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE, null=True)
    result = models.ForeignKey(Result, on_delete=models.CASCADE, null=True)