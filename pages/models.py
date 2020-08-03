from django.db import models
from django.db.models import TextChoices
from ckeditor.fields import RichTextField

# Create your models here.
class Page(models.Model):
    lan = (
        ('es', 'Español'),
        ('en', 'English'),
    )
    title = models.CharField(max_length=50, verbose_name='Titulo WEB')
    subtitle = models.CharField(null=False, blank=True, max_length=50, verbose_name='Frase Inicial')
    frase = models.CharField(null=False, blank=True, max_length=200, verbose_name='Subtítulo')
    description = RichTextField(null=False, blank=True, verbose_name='Descripción')
    content = RichTextField(verbose_name='Pagina HTML', blank=True)
    slug = models.CharField(unique=True, max_length=150, verbose_name='Slug de la URL', blank=True, null=False)
    LanguageType = models.TextChoices('es','en')
    language = models.CharField(blank=False, choices=lan, max_length=10, verbose_name='Lenguaje')
    public = models.BooleanField(verbose_name='¿Publicada?')
    image = models.ImageField(verbose_name='Imagen de fondo', blank=True, null=True)
    order = models.IntegerField(default=0, verbose_name='orden del menu')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Creado el")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Modificado el")

    class Meta:
        verbose_name = "Página"
        verbose_name_plural = "Páginas"

    def __str__(self):
        return self.title