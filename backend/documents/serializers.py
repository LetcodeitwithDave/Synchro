from  .models import Document, Tag, Category, File
import os
from rest_framework import serializers
from ..utils import get_extension_by_category


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Tag
        fields =  '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model =  Category
        fields =  '__all__'


class DocumentSerializer(serializers.ModelSerializer):
    file_extension =  serializers.SerializerMethodField()
    file_name = serializers.SerializerMethodField()


    class Meta:

        model = Document
        fields = ['file', 'file_extension','file_name' ]

    def get_file_extension (self, obj):
        value = os.path.splitext(obj.file.name)[1]
        
        return value
    
    def get_file_name (self, obj):
        file_path = obj.file.name
        file_name = os.path.basename(file_path)
        print('this is the file name ', file_name)
        return file_name
   

class DocumentSummarySerializer(serializers.ModelSerializer):

    tags = serializers.CharField()
    category = serializers.CharField()


    class Meta:
        model = Document
        fields = ['title', 'description', 'tags', 'file' , 'category']
    

class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Document
        fields = ['id', 'title', 'description', 'tags', 'file' , 'category']


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model =  File
        fields = '__all__'

    def create(self, validated_data):

        file_extension = validated_data['extension']
        category = get_extension_by_category(file_extension)

        category_instance, _ = File.objects.get_or_create(name=category)

        create_file = File.objects.create(
            category=category_instance, 
            **validated_data
            )

        return create_file

        