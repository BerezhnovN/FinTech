from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    email = models.EmailField('Email', max_length=254, unique=True)
    username = models.CharField('Username', max_length=150, unique=True)
    first_name = models.CharField('Name', max_length=150)
    last_name = models.CharField('Surname', max_length=150)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    class Meta:
        ordering = ('-pk',)
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return self.username
