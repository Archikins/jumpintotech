# Generated by Django 3.0.5 on 2020-06-22 06:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JIT', '0036_reviews'),
    ]

    operations = [
        migrations.AddField(
            model_name='tiponoticia',
            name='order',
            field=models.IntegerField(default=2, verbose_name='orden del menu'),
        ),
    ]