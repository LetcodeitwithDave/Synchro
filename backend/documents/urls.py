from django.urls import path
from . import views
urlpatterns = [
    # path("documents", views.mydocuments , name="documents list"),
    path("download_document/<int:file_id>", views.download_document, name="download file"),
    path("document/search", views.search_document, name='search document' ),
    path("documents", views.document_type, name="document type")
]
