from rest_framework.routers import DefaultRouter
from .views import ProductsViewSet, OrdersViewSet

router = DefaultRouter()
router.register(r'products', ProductsViewSet)
router.register(r'orders', OrdersViewSet)
# router.register(r'users', UserViewSet)

urlpatterns = router.urls
