from django.urls import path
from views import index

urlpatterns = [
    path('/', index),
    path('portfolio/', index),
    path('contact/', index),
    path('blog/', index),
    path('blog/<str:blog_slug>', index),
    path('product/', index),
    path('product/<int:id>', index),
    path('login/', index),
    path('signup/', index),
]
