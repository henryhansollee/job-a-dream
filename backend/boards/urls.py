from django.urls import path
from . import views

urlpatterns = [
    path('', views.BoardListAPI.as_view()),
    path('<int:pk>', views.BoardDetailAPI.as_view()),
]