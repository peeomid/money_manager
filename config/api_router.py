from rest_framework.routers import DefaultRouter, SimpleRouter
from django.conf import settings
from money_manager.users.api.views import UserViewSet
from money_manager.finance import api as finance_api

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)
router.register("categories", finance_api.CategoryViewSet)
router.register("transactions", finance_api.TransactionViewSet)


app_name = "api"
urlpatterns = router.urls
