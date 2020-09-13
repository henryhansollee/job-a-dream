from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework import viewsets, permissions, generics, status

class CreateUserAPIView(APIView):

    def post(self, request):
        pass