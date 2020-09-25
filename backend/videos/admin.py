from django.contrib import admin
from .models import Question

# Register your models here.
class QuestionAdmin(admin.ModelAdmin):
    fields = ['content']

admin.site.register(Question, QuestionAdmin)