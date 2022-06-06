from pyexpat import model
from django.db import models
from rest_framework import fields, serializers
from .models import BlogPost, Messages, Project
from rest_framework import serializers
from django.contrib.auth.models import User


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ("__all__")


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ['email', 'subject', 'message']


class BlogPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPost
        fields = ['blog_id', 'blog_title', 'blog_slug',
                  'blog_post', 'blog_tag']
