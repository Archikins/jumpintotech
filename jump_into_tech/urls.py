"""jump_into_tech URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from pages import views
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('es/contacto/', views.formulario_contacto, name="formcontacto"),
    path('en/contact/', views.formulario_contacto2, name="formcontacto2")
]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    
    path("<str:language>/<str:slug>/", views.page, name='Pagina' ),
    path('<str:language>/<str:slug>/<str:category_id>', views.page_category, name='pagina2')
]