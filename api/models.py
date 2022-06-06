from pyexpat import model
import random
import string
from django.db import models

# Create your models here.


def getSlug():
    length = 6
    while True:
        blog_slug = ''.join(random.choices(string.ascii_uppercase, k=length))
        if BlogPost.objects.filter(blog_slug=blog_slug).count() == 0:
            break
    return blog_slug


TAGS = (
    ("Apartment", "Apartments"),
    ("Bedroom", "Bedrooms"),
    ("Bathroom", "Apartments"),
    ("Branson Makeover", " Branson Makeovers"),
    ("Container House", "Container Houses"),
    ("Country House", "Country Houses"),
    ("Country House", "Country Houses"),
    ("Kids Room", "Kids Rooms"),
    ("Kitchen", "Kitchens"),
    ("Living room /Dining", "Living room /Dining"),
    ("Penthouse", "Penthouse")
)


class Project(models.Model):
    project_title = models.CharField(max_length=25, default="", null=True)
    link_url = models.CharField(max_length=255, default="", null=True)
    cover_image = models.ImageField(upload_to='images')
    project_tag = models.CharField(choices=TAGS, max_length=25, default="")

    def __str__(self):
        return self.project_title


class Messages(models.Model):
    email = models.CharField(max_length=255, default='', null=True)
    subject = models.CharField(max_length=255, default='', null=True)
    message = models.TextField(max_length=255, default='', null=True)

    def __str__(self):
        return self.subject


STATUS = (
    (0, "Draft"),
    (1, "Publish")
)


class BlogPost(models.Model):
    blog_cover_image = models.CharField(max_length=255, default="", null=True)
    blog_id = models.IntegerField(unique=True, null=False,
                                  primary_key=True, auto_created=True)
    blog_title = models.CharField(max_length=255, default="", null=True)
    blog_post = models.TextField(max_length=10000, default='', null=True)
    blog_slug = models.CharField(max_length=8, default=getSlug, unique=True)
    created_at = models.DateTimeField(auto_now=True)
    blog_status = models.IntegerField(choices=STATUS, default=0)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.blog_title
