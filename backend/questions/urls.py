from django.urls import path
from . import views

urlpatterns = [
    path('', views.QuestionListAPI.as_view()),
    path('<int:pk>', views.QuestionListAPI.as_view()),
]