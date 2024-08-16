from django.shortcuts import render
from rest_framework.response import Response
from django.http import HttpResponse
from .serializers import CustomUserSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status


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



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Account(request):

    context  = {
        "username": request.user.username,
        "email" : request.user.email,
    }
    return Response(context) 