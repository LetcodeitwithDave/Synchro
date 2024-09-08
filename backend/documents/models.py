from django.db import models
from account.models import CustomUser
# Create your models here.


class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name

class Document(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    tags = models.ManyToManyField(Tag, related_name='tags')
    file =  models.FileField(upload_to='documents/')
    uploader = models.ForeignKey(CustomUser, null=True , on_delete=models.CASCADE, related_name='documents')
    last_updated = models.DateTimeField( null=True , auto_now_add=True)
    upload_date = models.DateTimeField( null=True, auto_now_add=True)
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, null=True)
    
    def __str__(self) -> str:
        return self.title




class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name
    
