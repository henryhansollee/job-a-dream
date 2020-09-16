from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Video
from .serializers import VideoSerializer

@permission_classes([IsAuthenticatedOrReadOnly])
@authentication_classes([JSONWebTokenAuthentication])
class VideoListAPI(ListCreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

@permission_classes([IsAuthenticated])
@authentication_classes([JSONWebTokenAuthentication])
class VideoDetailAPI(RetrieveUpdateDestroyAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer