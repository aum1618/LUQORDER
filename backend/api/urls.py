from django.urls import path
from .views import SignupView, welcome, RetrieveBlogs, LoginView, UserDetailView
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path("", welcome, name="welcome"),
    path("blogs", RetrieveBlogs.as_view(), name="blogs"),
    path("signup/", SignupView.as_view(), name="signup"),
    path("login/", LoginView.as_view(), name="login"),
    path("user-detail/", UserDetailView.as_view(), name="user-detail"),
]
