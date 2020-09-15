from django.db.models import Q

from rest_framework import status
from rest_framework.decorators import action, permission_classes, authentication_classes
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Board
from .serializers import BoardSerializer
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveDestroyAPIView, UpdateAPIView


# @permission_classes([IsAuthenticated])
# @authentication_classes([JSONWebTokenAuthentication])
# class BoardViewSet(ModelViewSet):
#     queryset = Board.objects.all()
#     serializer_class = BoardSerializer

#     def get_serializer_context(self):
#         context = super().get_serializer_context()
#         context['request'] = self.request
#         return context
    
#     def get_queryset(self):
#         qs =  super().get_queryset()
#         qs = qs.filter(author=self.request.user)
#         return qs

#     def perform_create(self, serializer):
#         serializer.save(author=self.request.user)
#         return super().perform_create(serializer)

@permission_classes([AllowAny])
class BoardListAPI(ListAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

@permission_classes([AllowAny])
class BoardDetailAPI(RetrieveDestroyAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

@permission_classes([IsAuthenticated])
@authentication_classes([JSONWebTokenAuthentication])
class BoardCreateAPI(ListCreateAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

@permission_classes([IsAuthenticated])
@authentication_classes([JSONWebTokenAuthentication])
class BoardUpdateAPI(UpdateAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer