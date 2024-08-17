from rest_framework import serializers
from .models import CustomUserRegistration

class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model =  CustomUserRegistration
        fields  = ['email', 'username', 'password', 'password2', 'firstname', 'lastname']

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError('Password do not match')
        return data
    

    def create(self, validated_data):
        validated_data.pop('password2') #remove the password confirmation field
        user  =  CustomUserRegistration.objects.create_user(**validated_data)
        return user

