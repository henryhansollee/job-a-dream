from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Board
from .serializers import BoardSerializer


@permission_classes([IsAuthenticatedOrReadOnly])
@authentication_classes([JSONWebTokenAuthentication])
class BoardListAPI(ListCreateAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

@permission_classes([IsAuthenticated])
@authentication_classes([JSONWebTokenAuthentication])
class BoardDetailAPI(RetrieveUpdateDestroyAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer