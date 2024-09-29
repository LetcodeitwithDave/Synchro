from django.urls import path
from .views import dashboard_summary
urlpatterns = [
    path('dashboard_summary/', dashboard_summary, name='dashbaord summary')    
]
