from django.urls import path
from . import views
urlpatterns = [
    path("documents", views.mydocuments , name="documents list"),
    path("document_summary", views.document_summary , name="documents summary"),

]
