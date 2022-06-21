from django.urls import path
from .views import AllBlogPosts, CreateAboutUs, GetCSRFToken, SendMessage, UpdateHomePage, ViewAboutUs

# from mochainteriors.api.views import TestView

urlpatterns = [
    # path('portfolio/', ProjectView.as_view()),
    path('send-message/', SendMessage.as_view()),
    path('blog/', AllBlogPosts.as_view()),
    path('getcsrf/', GetCSRFToken.as_view()),
    path('updateabout/', CreateAboutUs.as_view()),
    path('updatehomepage/', UpdateHomePage.as_view()),
    path('viewabout', ViewAboutUs.as_view()),
]
