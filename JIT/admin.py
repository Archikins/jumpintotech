from django.contrib import admin
from .models import Proyecto, TipoProyecto, Servicio, TipoServicio, Equipo, Paso_filosofia, Noticia, TipoNoticia, metodologiaJit, reviews, clients

# Register your models here.

class EntradasAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')
    search_fields = ('title',)
    list_filter = ('public',)
    list_display = ('title', 'language', 'public', 'created_at', 'user')
    ordering = ('-created_at',)

class EntradasAdmin2(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')
    search_fields = ('title',)
    list_filter = ('public',)
    list_display = ('title', 'categories', 'language', 'public', 'created_at', 'user')
    ordering = ('-created_at',)

class Entradasequipo(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')
    search_fields = ('title',)
    list_filter = ('public',)
    list_display = ('title', 'language', 'public', 'created_at')
    ordering = ('-created_at',)


class CategoriesAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')
    search_fields = ('title',)
    list_filter = ('public',)
    list_display = ('title', 'language', 'public', 'created_at')
    ordering = ('-created_at',)

class Logos(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')
    search_fields = ('title',)
    list_filter = ('public',)
    list_display = ('title', 'order', 'public', 'created_at')
    ordering = ('-created_at',)


admin.site.register(Proyecto, EntradasAdmin2)
admin.site.register(metodologiaJit, EntradasAdmin)
admin.site.register(reviews, EntradasAdmin)
admin.site.register(TipoProyecto, CategoriesAdmin)
admin.site.register(Servicio, EntradasAdmin)
admin.site.register(TipoServicio, CategoriesAdmin)
admin.site.register(Equipo, Entradasequipo)
admin.site.register(Paso_filosofia, EntradasAdmin)
admin.site.register(Noticia, EntradasAdmin)
admin.site.register(TipoNoticia, CategoriesAdmin)
admin.site.register(clients, Logos)