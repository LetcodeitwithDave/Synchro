from django.db import models

# Create your models here.

class FileUpload(models.Model):
    title = models.CharField(max_length=100)
    descrition = models.CharField(max_length=500)
    tags = models.CharField(max_length=100)
    file_upload =  models.FileField(upload_to='media')