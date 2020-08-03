from django.shortcuts import render
from .models import Page
from JIT.models import *
from .forms import *

# Create your views here.
def page(request, language, slug):
    tipoproyectos = TipoProyecto.objects.all()
    equipo = Equipo.objects.order_by('order').filter(public=True)
    tiposervicios = TipoServicio.objects.all()
    pasos = Paso_filosofia.objects.all()
    noticias = Noticia.objects.filter(public=True)
    tiponoticia = TipoNoticia.objects.all()
    metodologia_jit = metodologiaJit.objects.filter(public=True)
    reviews_ = reviews.objects.filter(public=True)
    clients_ = clients.objects.order_by('order').filter(public=True)
    
    if language != "admin" and language != "media":
        page_c = Page.objects.get(language=language, slug=slug)
        if slug == 'inicio' or slug == 'home':
            return render(request, 'index.html', {
            "page_c": page_c,
            'tipoproyectos':tipoproyectos,
            'tiposervicios': tiposervicios,
            'tiponoticia': tiponoticia,
            'equipo':equipo,
            'noticias':noticias,
            'pasos': pasos,
            'lan':language,
            'slug':slug,
            'metodologiaJit':metodologia_jit,
            'reviews_':reviews_,
            'clients_':clients_
            })
        else:
            return render(request, 'page.html', {
            "page_c": page_c,
            'tipoproyectos':tipoproyectos,
            'tiposervicios': tiposervicios,
            'tiponoticia': tiponoticia,
            'equipo':equipo,
            'noticias':noticias,
            'pasos': pasos,
            'lan':language,
            'slug':slug,
            'metodologiaJit':metodologia_jit,
            'reviews_':reviews_,
            'clients_':clients_
            })
    else:
        return render(request)
       

def page_category(request, language, slug, category_id):
    proyectos = Proyecto.objects.all()
    proyectos = Proyecto.objects.order_by('order').filter(public=True)
    servicios = Servicio.objects.all()
    servicios = Servicio.objects.filter(public=True)
    tiposervicios = TipoServicio.objects.all()
    noticias = Noticia.objects.filter(public=True)
    tiponoticia = TipoNoticia.objects.all()

    if language != "admin" and language != "media":
        page_c = Page.objects.get(language=language, slug=slug)
   
        return render(request, 'layout.html', {
            "page_c": page_c,
            'proyectos':proyectos,
            'tiposervicios': tiposervicios,
            'category_id': category_id,
            'lan':language,
            'slug':slug,
            'noticias':noticias,
            'servicios':servicios
        })
    else:
        return render(request)

def formulario_contacto(request):
    formulario = FormContacto()
    page_c = Page.objects.get(language='es', slug='contacto')
    return render(request, 'layout.html', {
        "page_c": page_c,
        'form':formulario,
        'lan':'es',
        'language':'es',
        'slug':'contacto'
    })

def formulario_contacto2(request):
    formulario = FormContactoEN()
    page_c = Page.objects.get(language='en', slug='contact')
    return render(request, 'layout.html', {
        "page_c": page_c,
        'form':formulario,
        'lan':'es',
        'language':'es',
        'slug':'contacto'
    })


