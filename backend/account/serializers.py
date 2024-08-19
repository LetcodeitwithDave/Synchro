from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model =  CustomUser
        fields  = ['id', 'email', 'username', 'password', 'password2', 'fullname']

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError('Password do not match')
        return data
    

    def create(self, validated_data):
        validated_data.pop('password2') #remove the password confirmation field
        user  =  CustomUser.objects.create_user(**validated_data)
        return user

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'username', 'fullname', 'profile_picture', 'bio',]

    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.username = validated_data.get('username', instance.username)
        instance.fullname = validated_data.get('fullname', instance.fullname)
        instance.bio = validated_data.get('bio', instance.bio)



        if 'profile_picture' in validated_data:
            instance.profile_picture =  validated_data['profile_picture']

        instance.save()

        return instance
        return super().update(instance, zzvalidated_data)
