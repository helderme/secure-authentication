#seguindo a documentacao em https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html#usage indicacoes para criacao do arquivo url.py

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from django.urls import path #esse path nao ta na documentacao mas tem que importar para funcionar a chamada abaixo

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
