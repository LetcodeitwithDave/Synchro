from django.contrib import admin
from .models import File, Tag, Category
# Register your models here.


admin.site.register(File)
admin.site.register(Tag)
admin.site.register(Category)