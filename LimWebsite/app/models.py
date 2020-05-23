from django.db import models

# Create your models here.
class Picture(models.Model):
    PictureId = models.CharField('Id', primary_key=True, max_length=15)
    PictureName = models.CharField('Name', max_length=50)