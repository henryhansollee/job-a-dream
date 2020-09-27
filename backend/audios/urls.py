from django.urls import path
from . import views

urlpatterns = [
    path('', views.AudioListAPI.as_view()),
    path('<int:pk>', views.AudioDetailAPI.as_view()),
]