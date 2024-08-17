from django.shortcuts import render
from rest_framework.response import Response
from django.http import HttpResponse
from .serializers import CustomUserSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import CustomUserRegistration



# Create your views here.

def test (request):
    return HttpResponse('<h1> hello bro </h1>')

@api_view(['POST'])
def Register(request):
    serializer = CustomUserSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success' :  'Account created successfully'}, status=status.HTTP_201_CREATED)
    
    return Response({'error' :  serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


#prep work
@api_view(['GET'])
def Account(request):
    list_of_account = CustomUserRegistration.objects.all()
    serializer =CustomUserSerializer(list_of_account, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK) 


    