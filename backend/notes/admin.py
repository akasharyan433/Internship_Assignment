from django.contrib import admin

# Register your models here.

from .models import Note
#from .models import Category


admin.site.register(Note)