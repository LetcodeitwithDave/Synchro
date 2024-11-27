from django.contrib import admin
from .models import Document, Tag, Category, File, CategoryClass
# Register your models here.


admin.site.register(Document)
admin.site.register(Tag)
admin.site.register(Category)
admin.site.register(File)
admin.site.register(CategoryClass)
