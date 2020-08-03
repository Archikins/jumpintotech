from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField





lan = (
        ('es', 'Español'),
        ('en', 'English'),
    )

# Create your models here.

class TipoProyecto(models.Model):
    title = models.CharField(max_length=100, verbose_name='Nombre')
    content = models.TextField(max_length=255, verbose_name='Descripción')
    public = models.BooleanField(verbose_name='¿Público?', default=False)
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='Fecha creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Fecha modificado')
    image = models.FileField(default='null',upload_to="Proyectos")
    slug = models.CharField(max_length=150, verbose_name='Slug de la URL', blank=True, null=False)
    language = models.CharField(blank=False, default='es', choices=lan, max_length=10, verbose_name='Lenguaje')

    class Meta:
        verbose_name = 'Categoría Proyecto'
        verbose_name_plural = 'Categorías Proyecto'

    def __str__(self):
        return self.title



class Proyecto(models.Model):
    title = models.CharField(max_length=100, verbose_name='Título')
    content = models.TextField(verbose_name='Descripción')
    public = models.BooleanField(verbose_name='¿Público?', default=False)
    user = models.ForeignKey(User, verbose_name='Usuario', on_delete=models.CASCADE, blank=True, null=True)
    categories = models.ForeignKey(TipoProyecto, verbose_name='Categoría Proyecto', on_delete=models.CASCADE, blank=True, null=True)
    app = models.BooleanField(default=False, verbose_name='Marcar SOLO si es una app')
    order = models.IntegerField(verbose_name='Orden de aparición', default=0)
    image = models.FileField( default='null', verbose_name='Imagen PC/(Imagen 1 para APP)')
    imageM = models.FileField(default='null', verbose_name='Imagen Móvil/(Imagen 2 para APP)')
    imaget = models.FileField(default='null', upload_to="Proyectos", verbose_name='Imagen Tablet/(Imagen 3 para APP)')
    url = models.URLField(verbose_name='URL de la página web', blank=True)
    language = models.CharField(blank=False, default='es', choices=lan, max_length=10, verbose_name='Lenguaje')
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='Fecha creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Fecha modificado')

    class Meta:
            verbose_name = 'Proyecto'
            verbose_name_plural = 'Proyectos'

    def __str__(self):
        return self.title

class TipoServicio(models.Model):
    title = models.CharField(max_length=100, verbose_name='Nombre tarjeta')
    content = models.TextField(max_length=255, verbose_name='Descripción tarjeta')
    frase = models.CharField(blank=True, null=False, max_length=1000, verbose_name='Frase en página')
    description = models.TextField(blank=True, null=False, max_length=500, verbose_name='Descripción pagina')
    frase2 = models.CharField(blank=True, null=False, max_length=300, verbose_name='Frase2 en página')
    frase3 = models.CharField(blank=True, null=False, max_length=300, verbose_name='Frase3 en página')
    public = models.BooleanField(verbose_name='¿Público?', default=False)
    slug = models.CharField(max_length=150, verbose_name='Slug de la URL', blank=True, null=False)
    language = models.CharField(blank=False, default='es', choices=lan, max_length=10, verbose_name='Lenguaje')
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='Fecha creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Fecha modificado')
    image = models.FileField(default='null')

    class Meta:
        verbose_name = 'Categoría Servicio'
        verbose_name_plural = 'Categorías Servicio'

    def __str__(self):
        return self.title



class Servicio(models.Model):
    title = models.CharField(max_length=100, verbose_name='Título')
    content = models.TextField(verbose_name='Descripción')
    public = models.BooleanField(verbose_name='¿Público?', default=False)
    user = models.ForeignKey(User, verbose_name='Usuario', on_delete=models.CASCADE, blank=True, null=True)
    categories = models.ForeignKey(TipoServicio, verbose_name='Categoría Servicio', on_delete=models.CASCADE, blank=True, null=True)
    image = models.FileField(default='null', upload_to="Servicio", verbose_name='Imagen')
    language = models.CharField(blank=False, default='es', choices=lan, max_length=10, verbose_name='Lenguaje')
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='Fecha creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Fecha modificado')

    class Meta:
            verbose_name = 'Servicio'
            verbose_name_plural = 'Servicios'

    def __str__(self):
        return self.title

class Equipo(models.Model):
    title = models.CharField(max_length=100, verbose_name='Nombre')
    content = models.TextField(verbose_name='Cargo')
    public = models.BooleanField(verbose_name='¿Público?', default=False)
    order = models.IntegerField(verbose_name='Orden de aparición', default=3)
    image = models.FileField(default='null', upload_to="Equipo", verbose_name='Imagen ícono')
    image_perfil = models.FileField(default='null', upload_to="Equipo", verbose_name='Foto Perfil')
    language = models.CharField(blank=False, default='es', choices=lan, max_length=10, verbose_name='Lenguaje')
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='Fecha creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Fecha modificado')

    class Meta:
            verbose_name = 'Equipo'
            verbose_name_plural = 'Equipo'

    def __str__(self):
        return self.title

class Paso_filosofia(models.Model):
    title = models.CharField(max_length=100, verbose_name='Título')
    content = models.TextField(verbose_name='Descripción')
    public = models.BooleanField(verbose_name='¿Público?', default=False)
    user = models.ForeignKey(User, verbose_name='Usuario', on_delete=models.CASCADE, blank=True, null=True)
    order = models.IntegerField(verbose_name="Orden de aparición(Uno ha de estar a cero)", default=0)
    image = models.FileField(default='null', upload_to="Filosofia", verbose_name='Imagen ícono')
    language = models.CharField(blank=False, default='es', choices=lan, max_length=10, verbose_name='Lenguaje')
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='Fecha creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Fecha modificado')

    class Meta:
            verbose_name = 'Paso Filosofía'
            verbose_name_plural = 'Pasos Filosofías'

    def __str__(self):
        return self.title


class TipoNoticia(models.Model):
    title = models.CharField(max_length=100, verbose_name='Nombre')
    content = models.TextField(max_length=255, verbose_name='Descripción')
    public = models.BooleanField(verbose_name='¿Público?', default=False)
    order = models.IntegerField(default=2, verbose_name='orden del menu')
    language = models.CharField(blank=False, default='es', choices=lan, max_length=10, verbose_name='Lenguaje')
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='Fecha creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Fecha modificado')
    
    class Meta:
        verbose_name = 'Categoría Noticia'
        verbose_name_plural = 'Categorías Noticia'

    def __str__(self):
        return self.title

class Noticia(models.Model):
    title = models.CharField(max_length=1000, verbose_name='Título')
    content = models.TextField(verbose_name='Descripción')
    entry = RichTextField(verbose_name="Contenido de la entrada", blank=True, null=False)
    public = models.BooleanField(verbose_name='¿Público?', default=False)
    user = models.ForeignKey(User, verbose_name='Usuario', on_delete=models.CASCADE, blank=True, null=True)
    image = models.FileField(default='null', upload_to="Noticias", verbose_name='Imagen tarjeta')
    order = models.IntegerField(default=0, verbose_name='Orden de aparición')
    categories = models.ForeignKey(TipoNoticia, verbose_name='Categoría Servicio', on_delete=models.CASCADE, blank=True, null=True)
    url = models.URLField(verbose_name="URL de la noticia", blank=True)
    language = models.CharField(blank=False, default='es', choices=lan, max_length=10, verbose_name='Lenguaje')
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='Fecha creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Fecha modificado')

    class Meta:
            verbose_name = 'Noticia'
            verbose_name_plural = 'Noticias'

    def __str__(self):
        return self.title



class metodologiaJit(models.Model):
    title = models.CharField(max_length=100, verbose_name='Título')
    description = models.TextField(verbose_name='Descripción de la tarjeta')
    public = models.BooleanField(verbose_name='¿Público?', default=False)
    user = models.ForeignKey(User, verbose_name='Usuario', on_delete=models.CASCADE, blank=True, null=True)    
    image = models.FileField(default='null', upload_to="Noticias", verbose_name='Imagen')
    language = models.CharField(blank=False, default='es', choices=lan, max_length=10, verbose_name='Lenguaje')
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='Fecha creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Fecha modificado')

    class Meta:
            verbose_name = 'Metodología JIT'
            verbose_name_plural = 'Metodología JIT'

    def __str__(self):
        return self.title




class reviews(models.Model):
    title = models.CharField(max_length=100, verbose_name='Nombre')
    charge = models.CharField(max_length=200, verbose_name='Cargo')
    content = models.TextField(verbose_name='Review')
    bussiness = models.CharField(max_length=100, verbose_name='Empresa')
    public = models.BooleanField(verbose_name='¿Público?', default=False)
    order = models.IntegerField(default=0, verbose_name='Orden de aparición')
    user = models.ForeignKey(User, verbose_name='Usuario', on_delete=models.CASCADE, blank=True, null=True)    
    language = models.CharField(blank=False, default='es', choices=lan, max_length=10, verbose_name='Lenguaje')
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='Fecha creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Fecha modificado')

    class Meta:
            verbose_name = 'Reviews'
            verbose_name_plural = 'Reviews'

    def __str__(self):
        return self.title
    

class clients(models.Model):
    title = models.CharField(max_length=100, verbose_name='Nombre')
    image = models.FileField(default='null', upload_to="Noticias", verbose_name='Logo Cliente')
    public = models.BooleanField(verbose_name='¿Público?', default=False)
    order = models.IntegerField(default=0, verbose_name='Orden de aparición')
    user = models.ForeignKey(User, verbose_name='Usuario', on_delete=models.CASCADE, blank=True, null=True)    
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='Fecha creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Fecha modificado')

    class Meta:
            verbose_name = 'Logo'
            verbose_name_plural = 'Logos'

    def __str__(self):
        return self.title







