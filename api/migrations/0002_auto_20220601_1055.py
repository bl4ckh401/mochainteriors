# Generated by Django 3.1.2 on 2022-06-01 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogpost',
            name='paste_bin',
        ),
        migrations.AddField(
            model_name='blogpost',
            name='blog_tag',
            field=models.CharField(choices=[('Apartment', 'Apartments'), ('Bedroom', 'Bedrooms'), ('Bathroom', 'Apartments'), ('Branson Makeover', ' Branson Makeovers'), ('Container House', 'Container Houses'), ('Country House', 'Country Houses'), ('Country House', 'Country Houses'), ('Kids Room', 'Kids Rooms'), ('Kitchen', 'Kitchens'), ('Living room /Dining', 'Living room /Dining'), ('Penthouse', 'Penthouse')], default='', max_length=30),
        ),
    ]
