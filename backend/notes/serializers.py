from rest_framework import serializers
from .models import Note

# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields = ['id', 'name']

class NoteSerializer(serializers.ModelSerializer):
    # category = CategorySerializer(read_only=True)
    class Meta:
        model = Note
        fields = ['id', 'title', 'content', 'created_at', 'updated_at']



