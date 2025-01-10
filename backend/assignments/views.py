from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Assignment
from .serializers import AssignmentSerializer
from rest_framework.permissions import IsAuthenticated
from django.http import FileResponse

class AssignmentViewSet(viewsets.ModelViewSet):
    queryset = Assignment.objects.all().order_by('-created_at')
    serializer_class = AssignmentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(teacher=self.request.user)

    @action(detail=True, methods=['get'])
    def download(self, request, pk=None):
        assignment = self.get_object()
        response = FileResponse(
            assignment.file,
            as_attachment=True,
            filename=assignment.file.name.split('/')[-1]
        )
        return response

    def create(self, request, *args, **kwargs):
        try:
            return super().create(request, *args, **kwargs)
        except PermissionError as e:
            return Response({"error": str(e)}, status=status.HTTP_403_FORBIDDEN)