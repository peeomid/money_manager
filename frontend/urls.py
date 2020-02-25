from django.urls import path, include
from . import views

app_name = "frontend"

urlpatterns = (
    # path("api/v1/", include(router.urls)),
    path("", views.frontend, name="app_index"),
)
