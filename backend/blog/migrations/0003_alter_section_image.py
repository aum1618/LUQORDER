# Generated by Django 4.2.2 on 2023-06-23 00:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_alter_blog_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='section',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='media/section_images/'),
        ),
    ]