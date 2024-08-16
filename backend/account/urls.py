from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView



urlpatterns = [
    path('signup/', views.Register, name='signup page'),
    path('accountdetails/', views.Account, name='accountdetails'),
    path('test/', views.test, name='test this thing')
        
]
