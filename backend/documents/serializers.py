from  .models import Document, Tag, Category
from rest_framework import serializers


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Tag
        fields =  ['name']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model =  Category
        fields =  ['name']

class DocumentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Document
        fields = '__all__'


class DocumentSummarySerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    category = CategorySerializer(many=True)
    file = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = ['title', 'description', 'tags','category' ,'file']

    
    def get_file(self, obj):
        return self.context['request'].build_absolute_uri(obj.get_absolute_url())