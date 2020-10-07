from django.urls import path
from . import views

urlpatterns = [
    path('', views.ResultAPI.as_view()),
]