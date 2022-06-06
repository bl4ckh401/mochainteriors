from django.contrib import admin
from .models import BlogPost, Messages, Project
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.


class BlogAdmin(SummernoteModelAdmin):
    list_display = ('blog_title', 'blog_slug', 'blog_status', 'created_at')
    list_filter = ("blog_status",)
    search_fields = ['blog_title', 'blog_post']
    prepopulated_fields = {'blog_slug': ('blog_title',)}
    summernote_fields = ('blog_post', )


admin.site.register(Project)
admin.site.register(Messages)
admin.site.register(BlogPost, BlogAdmin)
