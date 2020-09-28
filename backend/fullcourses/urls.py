from django.urls import path
from . import views

urlpatterns = [
    path('', views.FullCourseListAPI.as_view()),
    path('<int:pk>', views.FullCourseDetailAPI.as_view()),
]