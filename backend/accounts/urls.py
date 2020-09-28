from django.urls import path
from .views import UserList, UpdateProfile
from .serializers import CustomJWTSerializer
from rest_framework_jwt.views import ObtainJSONWebToken

urlpatterns = [
    path('signup/', UserList.as_view()),
    path('login/', ObtainJSONWebToken.as_view(serializer_class=CustomJWTSerializer)),
    path('<int:pk>', UpdateProfile.as_view()),
]