from rest_framework import serializers, viewsets
from rest_framework.authentication import BasicAuthentication

from locations.models import Coordinate


class CoordinateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coordinate
        fields = '__all__'


class CoordinateViewSet(viewsets.ModelViewSet):
    queryset = Coordinate.objects.all()
    serializer_class = CoordinateSerializer