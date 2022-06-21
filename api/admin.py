from django.contrib import admin
from .models import AboutUs, BlogPost, HomePage, Messages
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.


class BlogAdmin(SummernoteModelAdmin):
    list_display = ('blog_title', 'blog_slug', 'blog_status', 'created_at')
    list_filter = ("blog_status",)
    search_fields = ['blog_title', 'blog_post']
    prepopulated_fields = {'blog_slug': ('blog_title',)}
    summernote_fields = ('blog_post', )


admin.site.register(HomePage)
admin.site.register(AboutUs)
admin.site.register(Messages)
admin.site.register(BlogPost, BlogAdmin)
