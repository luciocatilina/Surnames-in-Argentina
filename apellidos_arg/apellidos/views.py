from django.shortcuts import render
from pymongo import MongoClient
import json
from django.http import JsonResponse, HttpResponseBadRequest

data = {}

def index(request):

    if data:
        return render (request, 'index.html', )
    
    return render (request, 'index.html')

def apellidos_json(request):
    uri = 'mongodb+srv://pablocandia395:Pa2020ca@surnamesarg.w3mqkyk.mongodb.net/?retryWrites=true&w=majority'

    client = MongoClient()
    client = MongoClient(uri)

    db = client['apellidos_arg']

    collection = db['apellidos_cantidad_personas_provincia']


    if request.method == 'POST':


        data = json.loads(request.body.decode('utf-8'))
        apellido = data.get('lastName')        

        lista_apellido_cant_provincia = []
        apellido_a_buscar = apellido
        results = collection.find({'apellido': apellido_a_buscar})

        for r in results:
            tupla = (r['cantidad'], r['provincia_nombre'])
            lista_apellido_cant_provincia.append(tupla)
            
        ordenada = sorted(lista_apellido_cant_provincia, key=lambda x : x[0], reverse=True)
        if len(ordenada) > 0:
            data = {
                'message': 'Success',
                'last_name': apellido_a_buscar,
                'info' : ordenada,
                'top_provincia' : '',
                'top_pais' : '',
            }
        else:
            data = {
                'message': 'Not found'
            }

        return JsonResponse(data)
    
