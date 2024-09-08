from django.contrib import admin
from .models import Document, Tag, Category
# Register your models here.


admin.site.register(Document)
admin.site.register(Tag)
admin.site.register(Category)