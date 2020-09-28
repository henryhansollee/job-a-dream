from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserProfileSerializer, UserSerializerWithToken
from .models import CustomUser

# from google.oauth2 import id_token
# from google.auth.transport import requests

class UserInfo(APIView):

    def get(self, request):
        serializer = UserSerializer(CustomUser.objects.get(pk=request.user.id))
        return Response(serializer.data, status=status.HTTP_200_OK)

class UserProfile(APIView):

    def put(self, request, pk):
        serializer = UserProfileSerializer(CustomUser.objects.get(pk=pk), data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserList(APIView):

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)