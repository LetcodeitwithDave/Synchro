from django.shortcuts import render
from .serializers import FileUploadSerializer
from .models import FileUpload
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def mydocuments(request):
    query = FileUpload.objects.all()
    if request.method == 'GET':
        
        serializer = FileUploadSerializer(query, many= True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        