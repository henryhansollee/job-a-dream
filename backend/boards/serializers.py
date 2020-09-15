import re
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Board

class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ['email']

class BoardSerializer(serializers.ModelSerializer):
    author = AuthorSerializer
    
    class Meta:
        model = Board
        fields = [
            'id',
            'title',
            'content',
            'author',
            'created_at',
        ]