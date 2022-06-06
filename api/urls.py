from django.urls import path

from .views import AllBlogPosts, GetCSRFToken, ProjectView, SendMessage

# from mochainteriors.api.views import TestView

urlpatterns = [
    path('portfolio/', ProjectView.as_view()),
    path('send-message/', SendMessage.as_view()),
    path('blog/', AllBlogPosts.as_view()),
    #     path('product/', AllProducts.as_view(), name="product"),
    path('getcsrf/', GetCSRFToken.as_view()),
    #     path('cart/add/<int:id>/', CartAdd.as_view()),
    #     path('cart/item_clear/<int:id>/', ClearItem.as_view(), name='item_clear'),
    #     path('cart/item_increment/<int:id>/',
    #          AddItem.as_view(), name='item_increment'),
    #     path('cart/item_decrement/<int:id>/',
    #          DecrementItem.as_view(), name='item_decrement'),
    #     path('cart/cart_clear/', ClearCart.as_view(), name='cart_clear'),
    #     path('cart/cart-detail/', ViewCart.as_view(), name='cart_detail'),
]
