from django.test import TestCase
from django.test import Client

from locations.models import Coordinate


class CoordinateTestCase(TestCase):
    def test_can_create_coordinates(self):
        client = Client()
        client.post('/api/coordinates/', {'longitude': '123', 'latitude': '456'})

        coord = Coordinate.objects.get()
        self.assertEqual(coord.longitude, 123)
        self.assertEqual(coord.latitude, 456)

    def test_can_get_list_of_coordinates(self):
        coord = Coordinate.objects.create(longitude=1, latitude=2)
        client = Client()
        response = client.get('/api/coordinates/')

        response_coord = response.json()[0]
        self.assertEqual(response_coord['id'], coord.id)
