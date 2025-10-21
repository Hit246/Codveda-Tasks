from django.urls import path
from .views import RegisterView, LoginView, PasswordResetRequestView, PasswordResetConfirmView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),path('reset-password/', PasswordResetRequestView.as_view(), name='password-reset'),
    path('reset-password/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password-reset-confirm'),
]
