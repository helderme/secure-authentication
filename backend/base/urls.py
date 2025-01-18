#https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html#usage
from django.urls import path

from .views import get_notes, CustomTokenObtainPairView, CustomRefreshToken

urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomRefreshToken.as_view(), name='token_refresh'),
    path('notes/', get_notes)
]
