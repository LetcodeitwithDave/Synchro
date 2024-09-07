from  .models import FileUpload
from rest_framework import serializers


class FileUploadSerializer(serializers.ModelSerializer):

    class Meta:
        model = FileUpload
        fields = ['title', 'description', 'tags', 'file']