#https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html#usage
from django.urls import path

from .views import get_notes, CustomTokenObtainPairView, CustomRefreshToken, logout, is_logged_in, register, add_note, delete_note

urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomRefreshToken.as_view(), name='token_refresh'),
    path('notes/', get_notes),
    path('add_note/', add_note),
    path('delete_note/<int:note_id>/', delete_note),
    path('logout/', logout),
    path('authenticated/', is_logged_in),
    path('register/', register)
]
