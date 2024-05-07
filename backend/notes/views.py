from django.shortcuts import render
from rest_framework.generics import DestroyAPIView
from django_filters.rest_framework import DjangoFilterBackend
from .filters import NoteFilter
from rest_framework import viewsets
from .models import Note
from .serializers import NoteSerializer


class NoteViewSet(DestroyAPIView, viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = NoteFilter

    def get_queryset(self):
        queryset = super().get_queryset()
        title_search = self.request.query_params.get('title__icontains', '')
        content_search = self.request.query_params.get('content__icontains', '')
        queryset = queryset.filter(title__icontains=title_search, content__icontains=content_search)
        return queryset
   
