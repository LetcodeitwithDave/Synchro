from django.db import models
from account.models import CustomUser


# Create your models here.


class Workspace(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    created_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)