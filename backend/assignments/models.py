from django.db import models
from users.models import CustomUser
from django.core.validators import FileExtensionValidator
# Create your models here.

class Assignment(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    file = models.FileField(upload_to='assignments/', validators=[FileExtensionValidator(allowed_extensions=['pdf', 'docx', 'doc', 'txt', 'ppt', 'pptx'])])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    file_size = models.IntegerField(editable=False, default=0)
    file_type = models.CharField(max_length=10, editable=False, default='')


    def save(self, *args, **kwargs):
        self.file_size = self.file.size
        self.file_type = self.file.content_type
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title