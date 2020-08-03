from django.contrib import admin
from .models import *


class pageinfo(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')
    search_fields = ('title',)
    list_display = ('title', 'language','created_at')
    ordering = ('-created_at',)

admin.site.register(Page, pageinfo)


title = "Jump into tech"
subtitle = "Panel de control"

admin.site.site_header = title
admin.site.site_title = title
admin.site.index_title = subtitle
