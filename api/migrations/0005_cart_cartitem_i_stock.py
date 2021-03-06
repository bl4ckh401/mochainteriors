# Generated by Django 3.1.2 on 2022-06-01 21:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_blogpost_blog_cover_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_added', models.BooleanField(default=False)),
                ('added_at', models.DateField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='i_stock',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=100)),
                ('price', models.FloatField(default=0)),
                ('image', models.ImageField(max_length=255, upload_to='pictures/%Y/%m/%d')),
                ('slug', models.SlugField(default='')),
                ('quantity', models.IntegerField(default=1)),
                ('description', models.TextField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='CartItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=1)),
                ('price_ht', models.FloatField(blank=True)),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.cart')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.i_stock')),
            ],
        ),
    ]
