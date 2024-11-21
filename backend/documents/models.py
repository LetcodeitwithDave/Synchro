from django.db import models
from account.models import CustomUser
# Create your models here.



class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self) :
        return self.name 
    


class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self) :
        return self.name

class Document(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    tags = models.ForeignKey(Tag, related_name='tags', null=True , on_delete=models.SET_NULL)
    file =  models.FileField(upload_to='documents/', null=True, blank=True)
    uploader = models.ForeignKey(CustomUser, null=True , on_delete=models.CASCADE, related_name='documents')
    last_updated = models.DateTimeField( null=True , auto_now_add=True)
    upload_date = models.DateTimeField( null=True, auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True ,related_name = 'category')
    
    def get_absolute_url(self):
        """ Return the full url for the file """
        return self.file.url
    


class File(models.Model):
    name = models.CharField(max_length=255)
    size = models.PositiveBigIntegerField()
    extension = models.CharField(max_length=10)  # File extension (e.g., .pdf)
    category = models.ForeignKey( Category, on_delete=models.CASCADE , related_name='files')  # Category (documents, images, etc.)
    file = models.FileField(upload_to="uploads/")  # File storage path
    uploaded_at = models.DateTimeField(auto_now_add=True)
    

    def __str__(self) :
        return self.title



