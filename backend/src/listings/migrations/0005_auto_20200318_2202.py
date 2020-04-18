# Generated by Django 3.0.4 on 2020-03-18 22:02

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('listings', '0004_auto_20200316_1657'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='favorite',
            field=models.ManyToManyField(blank=True, default='', related_name='favorite', to=settings.AUTH_USER_MODEL),
        ),
    ]