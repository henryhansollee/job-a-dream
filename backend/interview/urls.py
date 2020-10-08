from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import (
    verify_jwt_token,
    refresh_jwt_token,
)
from .views import validate_jwt_token


urlpatterns = [
    path('api/admin/', admin.site.urls),
    
    path('api/validate/', validate_jwt_token),
    path('api/verify/', verify_jwt_token),
    path('api/refresh/', refresh_jwt_token),

    path('api/accounts/', include('accounts.urls')),
    path('api/boards/', include('boards.urls')),
    path('api/videos/', include('videos.urls')),
    path('api/audios/', include('audios.urls')),
    path('api/questions/', include('questions.urls')),
    path('api/fullcourses/', include('fullcourses.urls')),
    path('api/results', include('results.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
