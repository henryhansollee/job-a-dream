from django.db import models
from django.conf import settings

# Create your models here.
class TimeStampModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Tag(TimeStampModel):
    name = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.name

class Video(TimeStampModel):
    title = models.CharField(max_length=30)
    thumbnail = models.ImageField(upload_to='thumbnail', blank=True)
    video_file = models.FileField(blank=True)
    audio_file = models.FileField(blank=True)
    tag = models.ManyToManyField(Tag, blank=True)
    writer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

class Question(models.Model):
    content = models.CharField(max_length=100)

class Result(models.Model):
    sight_analysis = models.TextField(blank=True)
    accuracy = models.TextField(blank=True)
    script = models.TextField(blank=True)