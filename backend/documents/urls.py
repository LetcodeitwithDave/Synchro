from django.urls import path
from . import views
urlpatterns = [

    path("download_document/<int:file_id>", views.download_document, name="download file"),
    path("documents/search", views.search_document, name='search document' ),
    path("documents/upload", views.upload_file, name='uplaod file' ),
    path("documents/<str:category_type>", views.document_type, name="document type")
]
