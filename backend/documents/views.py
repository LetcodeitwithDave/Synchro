from django.shortcuts import render, get_object_or_404
from .serializers import DocumentSerializer , SearchSerializer ,DocumentSummarySerializer
from .models import Document, Category, Tag
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.permissions import IsAuthenticated
from django.http import FileResponse
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
    print('request data => ', request.GET.get('title'))

    title  = request.GET.get('title', None)
    
    if title:
        queryset = queryset.filter(title__icontains = title)

    serializer = SearchSerializer( queryset, many=True)
    print('serializer data =>', serializer.data)
    return Response({'data':serializer.data}, status=status.HTTP_200_OK)



    
    