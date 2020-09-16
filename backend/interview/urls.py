from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import (
    verify_jwt_token,
    refresh_jwt_token,
)
from .views import validate_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('validate/', validate_jwt_token),
    path('verify/', verify_jwt_token),
    path('refresh/', refresh_jwt_token),

    path('accounts/', include('accounts.urls')),
    path('boards/', include('boards.urls')),
    path('videos/', include('videos.urls')),
]
