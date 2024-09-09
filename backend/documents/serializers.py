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
    # tags = TagSerializer(many=True)
    # category = CategorySerializer(many=True)
    file_url = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = ['title', 'description', 'tags','category' ,'file_url']

    
    def get_file_url(self, obj):
        request = self.context.get('request')
        if request is not None:
            return request.build_absolute_uri(obj.get_absolute_url())
        return obj.get_absolute_url()