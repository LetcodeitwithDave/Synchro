from  .models import Document, Tag, Category
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

    class Meta:
        model = Document
        fields = '__all__'



class DocumentSummarySerializer(serializers.ModelSerializer):
    # category = CategorySerializer()
    # tags = TagSerializer( )
    # category = CategorySerializer( )

    tags = serializers.CharField()
    category = serializers.CharField()


    class Meta:
        model = Document
        fields = ['title', 'description', 'tags', 'file' , 'category']
    
    def create(self, validated_data):

        
        tags_data = validated_data.pop('tags')
        category_data = validated_data.pop('category')

        
        
        tag_instance = Tag.objects.create(name = tags_data)
        category_instance = Category.objects.create(name = category_data)

        document =  Document.objects.create(
            category= category_instance, 
            tags= tag_instance , 
            **validated_data
            )
        
        return document
    

class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Document
        fields = ['id', 'title', 'description', 'tags', 'file' , 'category']


    
    