from django.shortcuts import render
from .serializers import DashboardSummarySerializer
from rest_framework.response import Response
from rest_framework import status

from rest_framework.decorators import api_view
import os

from documents.models import File
from documents.serializers import FileSerializer

@api_view(['GET', 'POST'])
def dashboard_summary (request):
    if request.method == 'GET':
        recent_documents =  File.objects.order_by('-uploaded_at')[:5]
        serializer = FileSerializer(recent_documents, many=True, context={'request': request})


        return Response(serializer.data, status= status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    # elif request.method == 'POST':
    #     print('request data -> ', request.FILES)
    #     print('request data name -> ', request.FILES['file'])
    #     print('request data path -> ', os.path.splitext(str(request.FILES['file'])))
    #     print('request data path name -> ', os.path.splitext(request.FILES['file'].name))
    #     print('request data path name -> ', request.FILES['file'].size)
       
    #     serializer = DashboardSummarySerializer(data= request.data)


    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)

    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    