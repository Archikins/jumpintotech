from .models import TipoProyecto, TipoServicio, TipoNoticia

def get_categories(request):

    categoriesPro = TipoProyecto.objects.filter(public=True).values_list('id','title', 'language', 'slug','content')
    categoriesSer = TipoServicio.objects.filter(public=True).values_list('id','title', 'language', 'slug','frase','description', 'frase2','frase3')
    categoriesNot = TipoNoticia.objects.filter(public=True).values_list('id','title', 'language')
    return {
        'categoriesPro': categoriesPro,
        'categoriesSer': categoriesSer,
        'categoriesNot': categoriesNot,
    }