from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model =  CustomUser
        fields  = ['email', 'username', 'password', 'password2', 'fullname']

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError('Password do not match')
        return data
    

    def create(self, validated_data):
        validated_data.pop('password2') #remove the password confirmation field
        user  =  CustomUser.objects.create_user(**validated_data)
        return user

