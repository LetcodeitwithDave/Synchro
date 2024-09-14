from django.shortcuts import render
from .serializers import DocumentSerializer , DocumentSummarySerializer
from .models import Document, Category, Tag
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from rest_framework.response import Response

# Create your views here.

@api_view(['GET', 'POST'])
# @permission_classes((IsAuthenticated,))
@parser_classes([MultiPartParser, FormParser])
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

@api_view(['GET', 'POST'])
def document_summary (request):
    if request.method == 'GET':
        recent_documents =  Document.objects.order_by('-upload_date')
        serializer = DocumentSummarySerializer(recent_documents, many=True, context={'request': request})

        print(serializer.data)
        return Response(serializer.data, status= status.HTTP_200_OK)


    if request.method ==  'POST':
        data  = request.data
        print('Received data ->', data)
        print('Received data ->', data.get('tags'))


        cateogry, created = Category.objects.get_or_create(name =  data['category'])
        
        tag, created = Tag.objects.get_or_create(name =  data['tags'])
            

        print(' this is the tags --', tag)
            

        if cateogry and tag :
            print('categeory in from view request ===> ', cateogry)

            document =  Document.objects.create(
                title= data['title'], 
                description =  data['description'],
                category = cateogry,
                file = data['file'],
                tags =  tag
            )

            serializer = DocumentSummarySerializer(document)

            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            print(' serializer error -> ', serializer.errors)
        return Response( serializer.errors ,status=status.HTTP_400_BAD_REQUEST)