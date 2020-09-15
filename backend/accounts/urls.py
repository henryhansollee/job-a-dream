from django.urls import path
from .views import current_user, UserList
from .serializers import CustomJWTSerializer
from rest_framework_jwt.views import ObtainJSONWebToken

urlpatterns = [
    path('signup/', UserList.as_view()),
    path('login/', ObtainJSONWebToken.as_view(serializer_class=CustomJWTSerializer)),
    path('current/', current_user),
]