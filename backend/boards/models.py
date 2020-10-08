from django.db import models
from django.conf import settings

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

class BoardResult(models.Model):
    q1 = models.TextField(blank=True)
    q2 = models.TextField(blank=True)
    q3 = models.TextField(blank=True)

class Board(TimeStampModel):
    title = models.CharField(max_length=30)
    subject = models.CharField(max_length=100)
    content = models.TextField()
    writer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    image = models.ImageField(blank=True)
    tag = models.ManyToManyField(Tag, blank=True)
    questions = models.ForeignKey(BoardResult, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.content

    class Meta:
        ordering = ['-id']