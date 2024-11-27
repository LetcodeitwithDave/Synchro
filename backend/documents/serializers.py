from  .models import Document, Tag, Category, CategoryClass, File
import os
from rest_framework import serializers
from documents.utils.get_extension_by_category import get_category_by_extension

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Tag
        fields =  '__all__'

class CategoryClassSerializer(serializers.ModelSerializer):
    class Meta:
        model =  CategoryClass
        fields =  ['name'] 


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

    category = serializers.CharField(required=False)


    class Meta:
        model =  File
        fields = ['name', 'size', 'extension', 'category' , 'file']
        read_only_fields = ['category']

    def create(self, validated_data):
        print('validated data => ', validated_data)
        file_extension = validated_data.get('extension')

        # Use provided category or determine it programmatically
        if 'category' not in validated_data or not validated_data['category']:
            file_extension = validated_data.get('extension')
            
            validated_data['category'] = get_category_by_extension(file_extension)
            print('category in the fucntion => ', get_category_by_extension(file_extension))

        return super().create(validated_data)

    
        