# Generated by Django 5.1.5 on 2025-02-06 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('property', '0011_rename_price_room_daily_rate_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='discount',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True),
        ),
    ]
