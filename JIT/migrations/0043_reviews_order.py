# Generated by Django 3.0.5 on 2020-06-25 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JIT', '0042_delete_inicio'),
    ]

    operations = [
        migrations.AddField(
            model_name='reviews',
            name='order',
            field=models.IntegerField(default=0, verbose_name='Orden de aparición'),
        ),
    ]
