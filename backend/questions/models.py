from django.db import models
from django.conf import settings

# Create your models here.
class Question(models.Model):
    content = models.TextField()
    writer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)