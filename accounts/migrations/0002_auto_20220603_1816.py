# Generated by Django 3.1.2 on 2022-06-03 18:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='products',
            name='owner',
        ),
        migrations.DeleteModel(
            name='Orders',
        ),
        migrations.DeleteModel(
            name='Products',
        ),
    ]
