from django.db.models import Q

from rest_framework import status
from rest_framework.decorators import action
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .models import Board
from .serializers import BoardSerializer

class BoardViewSet(ModelViewSet):
    queryset = (
        Board.objects.all()
        .select_related('author')
        .prefetch_related('tag_set')
    )
    serializer_class = BoardSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context
    
    def get_queryset(self):
        qs =  super().get_queryset()
        qs = qs.filter(author=self.request.user)
        return qs

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
        return super().perform_create(serializer)