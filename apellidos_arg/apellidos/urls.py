from django.urls import path
from .views import index, apellidos_json

urlpatterns = [
    path('', index, name='index'),
    path('apellidos_json', apellidos_json),
]
