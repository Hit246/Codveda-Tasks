from rest_framework import generics, permissions
from .models import Task
from .serializers import TaskSerializer


class TaskListCreateView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    permission_classes = [permissions.AllowAny]  

    def perform_create(self, serializer):
        serializer.save()  


class TaskRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    permission_classes = [permissions.AllowAny]  # 👈 Changed here
