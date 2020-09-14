import re
from django.db import models
from django.conf import settings
from django.urls import reverse

# Create your models here.
class TimeStampModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Board(TimeStampModel):
    title = models.CharField(max_length=30)
    content = models.TextField()
    author = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='my_post_set', on_delete=models.CASCADE)
    image = models.ImageField()
    tag_set = models.ManyToManyField('Tag', blank=True)

    def __str__(self):
        return self.content

    class Meta:
        ordering = ['-id']

class Tag(TimeStampModel):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name