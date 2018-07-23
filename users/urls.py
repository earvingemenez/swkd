from django.urls import path, re_path
from .views import Login, User


urlpatterns = [
    path('auth/connect/', Login.as_view(), name='login'),
    path('auth/user/', User.as_view({'get': 'authuser'}), name='authuser'),
]