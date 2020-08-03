from django.shortcuts import render, HttpResponse
from .models import Proyecto, TipoProyecto

def index (request):
    return render(request, 'index.html')

def filosofia (request):
    return render(request, 'Filosofia.html')
    
def servicios (request):
    return render(request, 'Servicios.html')

def apps (request):
    return render(request, 'index.html')

def category_proyects (request, category_id):
    proyectos = Proyecto.objects.all()
    proyectos = Proyecto.objects.filter(public=True)
    category = TipoProyecto.objects.get(id=category_id)
    return render(request, 'categoryProyects.html', {'proyectos':proyectos,'category':category,'category_id': category_id})

def ideas (request):
    return render(request, 'index.html')

def marketing (request):

    return render(request, 'index.html')

def proyectos (request):
    tipoproyectos = TipoProyecto.objects.all()
    return render(request, 'proyectos.html', {'tipoproyectos':tipoproyectos})
    
def equipo (request):
    return render(request, 'Equipo.html')

def noticias (request):
    return render(request, 'Noticias.html')

def contacto (request):
    return render(request, 'Contacto.html')





