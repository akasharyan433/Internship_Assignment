from django.db import models

# Create your models here.

# class Category(models.Model):
#     name = models.CharField(max_length=100)

#     def __str__(self):
#         return self.name  

class Note(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name='notes')


    class Meta:
        app_label = 'notes'

    def __str__(self):
        return self.title
    
  
