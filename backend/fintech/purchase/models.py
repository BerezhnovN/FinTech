from django.db import models
from users.models import User
from .validators import validate_positive


class Active(models.Model):
    owner = models.ManyToManyField(User,
                                   through='ActiveOwner',
                                   verbose_name='Держатель')
    name = models.CharField(verbose_name='Название актива',
                            max_length=300)
    price = models.FloatField(validators=[validate_positive],
                              verbose_name='Цена')


class ActiveOwner(models.Model):
    active = models.ForeignKey(Active,
                               on_delete=models.PROTECT,
                               related_name='active_owner',
                               verbose_name='Active')
    owner = models.ForeignKey(User,
                              on_delete=models.CASCADE,
                              related_name='owner_active',
                              verbose_name='Держатель')
    amount = models.FloatField(validators=[validate_positive],
                               verbose_name='Количество')