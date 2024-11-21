from django.shortcuts import render
from .serializers import DashboardSummarySerializer
from rest_framework.response import Response
from rest_framework import status
from  documents.models import Document
from rest_framework.decorators import api_view
import os

@api_view(['GET', 'POST'])
def dashboard_summary (request):
    if request.method == 'GET':
        recent_documents =  Document.objects.order_by('-upload_date')[:5]
        serializer = DashboardSummarySerializer(recent_documents, many=True, context={'request': request})


        return Response(serializer.data, status= status.HTTP_200_OK)
    
    elif request.method == 'POST':
        print('request data -> ', request.FILES)
        print('request data name -> ', request.FILES['file'])
        print('request data path -> ', os.path.splitext(str(request.FILES['file'])))
        print('request data path name -> ', os.path.splitext(request.FILES['file'].name))
        print('request data path name -> ', request.FILES['file'].size)
       
        serializer = DashboardSummarySerializer(data= request.data)


        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    