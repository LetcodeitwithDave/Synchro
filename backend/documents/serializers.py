from  .models import File, Tag, Category
import os
from rest_framework import serializers


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

        model = File
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
        model = File
        fields = ['title', 'description', 'tags', 'file' , 'category']
    

class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model =  File
        fields = ['id', 'title', 'description', 'tags', 'file' , 'category']


    


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model =  File
        