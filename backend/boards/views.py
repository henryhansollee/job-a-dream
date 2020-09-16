from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveDestroyAPIView, UpdateAPIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Board
from .serializers import BoardSerializer


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