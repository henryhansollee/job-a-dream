from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Board
from .serializers import BoardSerializer


# @permission_classes([IsAuthenticatedOrReadOnly])
# @authentication_classes([JSONWebTokenAuthentication])
# class BoardListAPI(ListCreateAPIView):
#     queryset = Board.objects.all()
#     serializer_class = BoardSerializer

class BoardListAPI(APIView):

    def get(self, request):
        serializer = BoardSerializer(Board.objects.filter(writer=request.user), many=True)
        print('요청옴?????')
        return Response(serializer.data, status=200)
    
    def post(self, request):
        serializer = BoardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(writer=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@permission_classes([IsAuthenticated])
@authentication_classes([JSONWebTokenAuthentication])
class BoardDetailAPI(RetrieveUpdateDestroyAPIView):
    print('요청옴?????')
    queryset = Board.objects.all()
    serializer_class = BoardSerializer