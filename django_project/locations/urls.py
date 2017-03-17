from rest_framework import routers

from locations.views import CoordinateViewSet

router = routers.SimpleRouter()
router.register('coordinates', CoordinateViewSet),

urlpatterns = router.urls
