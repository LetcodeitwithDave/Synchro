from  .models import Document, Tag, Category
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


    class Meta:
        model = Document
        fields = ['file', 'file_extension', ]

    def get_file_extension (self, obj):
        value = os.path.splitext(obj.file.name)[1]
        print('value in seriliazer => ', value)
        print('obj in serializer => ', obj)
        print('obj in serializer name  => ', os.path.splitext(obj.file.name))
        return value
    



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


    
    