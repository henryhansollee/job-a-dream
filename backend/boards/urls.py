from django.urls import path
from . import views

urlpatterns = [
    path('clist/', views.BoardListAPI.as_view()),
    path('ccreate/', views.BoardCreateAPI.as_view()),
    path('cupdate/', views.BoardUpdateAPI.as_view()),
    path('cdetail/<int:pk>/', views.BoardDetailAPI.as_view()),
]