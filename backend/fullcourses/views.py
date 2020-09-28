from rest_framework.response import Response
from rest_framework.views import APIView

from .models import FullCourse
from .serializers import FullCourseSerializer


class FullCourseListAPI(APIView):

    def get(self, request):
        serializer = FullCourseSerializer(FullCourse.objects.filter(writer=request.user), many=True)
        return Response(serializer.data, status=200)
    
    def post(self, request):
        serializer = FullCourseSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save(writer=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class FullCourseDetailAPI(APIView):

    def get(self, request, pk):
        serializer = FullCourseSerializer(FullCourse.objects.get(pk=pk))
        return Response(serializer.data, status=200)

    def delete(self, request, pk):
        fullcourse = FullCourse.objects.get(pk=pk)
        fullcourse.delete()
        return Response('삭제되었습니다.')    