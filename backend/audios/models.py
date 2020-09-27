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

class Audio(TimeStampModel):
    title = models.CharField(max_length=30)
    thumbnail = models.ImageField(upload_to='audio_thumbnail', blank=True)
    audio_file = models.FileField(blank=True)
    tag = models.ManyToManyField(Tag, blank=True)
    writer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

# result는 audio에 넣을지 따로 테이블을 뺄지 다시 생각하기!