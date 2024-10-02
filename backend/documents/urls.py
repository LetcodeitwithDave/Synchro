from django.urls import path
from . import views
urlpatterns = [
    path("documents", views.mydocuments , name="documents list"),
]
