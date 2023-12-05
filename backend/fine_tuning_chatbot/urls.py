from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from . import views
from . views import (
    FineTunedModelViewSet,
    TrainingDataViewSet
)

router = DefaultRouter()
router.register(r'fine_tuned_models', FineTunedModelViewSet)
router.register(r'training_data', TrainingDataViewSet)

urlpatterns = [
    # path('hello/',views.hello_world),
    path('', include(router.urls)),
]
