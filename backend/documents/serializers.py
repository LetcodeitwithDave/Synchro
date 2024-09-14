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
    tags = TagSerializer()
    category = CategorySerializer()


    class Meta:
        model = Document
        fields = ['title', 'description', 'tags', 'file' , 'category']

    # def create(self, validated_data):

    #     print('validate data ' , validated_data)
    #     # Extract category and tags from validated_data

    #     category_data = validated_data.pop('category')
    #     print('category data ', category_data)
    #     tag_data = validated_data.pop('tags')
     

    #     # Handle category creation/retrieval
    #     category = Category.objects.create(**category_data)

    #     # Create the document object
    #     document = Document.objects.create(category=category, **validated_data)

    #     # Handle tags: get or create each tag and associate it with the document
    #     for tag in tag_data:
    #         tag_instance, _ = Tag.objects.create(**tag)
    #         document.tags.add(tag_instance)

    #     return document