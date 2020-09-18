from django.urls import path
from . import views

urlpatterns = [
    path('', views.VideoListAPI.as_view()),
    path('<int:pk>', views.VideoDetailAPI.as_view()),
]