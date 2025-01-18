#https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html#usage

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from django.urls import path

from .views import get_notes, CustomTokenObtainPairView

urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('notes/', get_notes)
]
