from django.shortcuts import render

from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from .serializers import CreateUserSerializer, UserSerializer, LoginUserSerializer

# Create your views here.
