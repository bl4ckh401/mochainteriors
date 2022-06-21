from django.urls import path
from views import index
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('home/', index),
    path('portfolio/', index),
    path('contact/', index),
    path('blog/', index),
    path('blog/<str:blog_slug>', index),
    path('product/', index),
    path('product/<int:id>', index),
    path('login/', index),
    path('signup/', index),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
