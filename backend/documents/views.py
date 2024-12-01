from django.shortcuts import render, get_object_or_404
from .serializers import DocumentSerializer , SearchSerializer ,FileSerializer
from .models import Document, CategoryClass, Tag
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.permissions import IsAuthenticated
from django.http import FileResponse
from rest_framework import status
from rest_framework.response import Response
import os

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

        
@api_view(['GET'])
def download_document(request, file_id):
    file_obj =  get_object_or_404(Document, id=file_id) #get file obj
    file_path = file_obj.file.path #file path
    
    print('download file path => ', file_path)
    #serve file as a downlaodable response
    response = FileResponse(open( file_path, 'rb'), as_attachment=True)
    print('download response => ', response)
    response['Content-Disposition'] = f'attachment; filename="{file_obj.file.name}"'

    return response
@api_view(['GET'])
def search_document(request):
    queryset = Document.objects.all()
    # print('request parameter => ', request.query_params.get('title', None))    
    title  = request.GET.get('title', None)
    
    if title:
        queryset = queryset.filter(title__icontains = title)

    serializer = SearchSerializer( queryset, many=True)
    print('serializer data =>', serializer.data)
    return Response({'data':serializer.data}, status=status.HTTP_200_OK)



    
@api_view(['GET'])
def document_type(request):
    file_extension =  request.query_params.get('extension', None)
    
    if file_extension:
        print('file extension -> ', file_extension[0])
        if not file_extension[0] == '.':
            file_extension = f".{file_extension}" #add (.) to extension


        document = Document.objects.filter(file__iendswith=file_extension) #file__iendswith --> case insensitive
        serializer = DocumentSerializer(document, many=True, context={'request': request})
        return Response({'data': serializer.data}, status=status.HTTP_200_OK)
    
    else:
        print('request => ', request)
        document  = Document.objects.all()
        serializer =  DocumentSerializer(document, many=True, context={'request': request})

        return Response({'data' : serializer.data}, status=status.HTTP_200_OK)

@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def upload_file(request):
    
    if 'file' not in request.FILES:
        print('not file here')
        return Response({'error': 'No file provided'}, status=status.HTTP_400_BAD_REQUEST)
    
    upload_file =  request.FILES['file']
    
   
    file_name, file_extension = os.path.splitext(upload_file.name)

    data = {
        'file_name':upload_file.name ,
        'size': upload_file.size,
        'extension': file_extension,
        'file': upload_file,

    }

    serializer =  FileSerializer(data = data)
    if serializer.is_valid():
        serializer.save()
        return Response({'data': serializer.data}, status=status.HTTP_201_CREATED)
    print("Serializer Errors:", serializer.errors)  # Debug error details
    return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)