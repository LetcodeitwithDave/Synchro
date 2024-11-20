from rest_framework import serializers
from documents.models import File, Category, Tag


class DashboardSummarySerializer(serializers.ModelSerializer):
    

    tags = serializers.CharField()
    category = serializers.CharField()


    class Meta:
        model = File
        fields = ['id', 'title', 'description', 'tags', 'file' , 'category']
    
    def create(self, validated_data):

        
        tags_data = validated_data.pop('tags')
        category_data = validated_data.pop('category')

        
        
        tag_instance = Tag.objects.create(name = tags_data)
        category_instance = Category.objects.create(name = category_data)

        document =  File.objects.create(
            category= category_instance, 
            tags= tag_instance , 
            **validated_data
            )
        
        return document
    