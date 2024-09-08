from django.shortcuts import render
from .serializers import DocumentSerializer
from .models import Document
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from rest_framework.response import Response

# Create your views here.

@api_view(['GET', 'POST'])
# @permission_classes((IsAuthenticated,))
def mydocuments(request):

    if request.method == 'GET':
        # user =  request.user
        document_count =  Document.objects.all()

        serializer = DocumentSerializer(document_count, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method ==  'POST':
        serializer = DocumentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def document_summary (request):
    # total_document =  Document.objects.count()


    # data  = {
    #     'total_document' : DocumentSerializer(total_document).data
    # }
    # return Response(data)

    query = Document.objects.count()
    if request.method == 'GET':
        total_document =  Document.objects.count()
        data  = {
            'total_document' : DocumentSerializer(total_document).data
        }
        serializer = DocumentSerializer(query, many= True)
        return Response(serializer.data, status=status.HTTP_200_OK)
