from django.shortcuts import render
from rest_framework.response import Response
from django.http import HttpResponse
from .serializers import CustomUserSerializer, ProfileSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import CustomUser



# Create your views here.

@api_view(['POST'])
def Register(request):
    serializer = CustomUserSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success' :  'Account created successfully'}, status=status.HTTP_201_CREATED)
    print('thi is the error ->', serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#prep work
@api_view(['GET'])
def Account(request):
    list_of_account = CustomUser.objects.all()
    serializer =CustomUserSerializer(list_of_account, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK) 


@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def ProfileView(request):
    user = request.user
    
    if request.method == 'GET':
        serializer =ProfileSerializer(user)
        return Response({'auth_user': serializer.data}, status=status.HTTP_200_OK)
       

    elif request.method == 'PUT':
        serializer =ProfileSerializer(user, data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'success': serializer.data}, status=status.HTTP_200_OK)
        
        return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        

    