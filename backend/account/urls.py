from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView



urlpatterns = [

    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'), #login
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), #refresh token

    path('signup/', views.Register, name='signup page'),
    path('accountdetails/', views.Account, name='accountdetails'),
    path('profile/', views.ProfileView, name='profile')
    
        
]
