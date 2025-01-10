from rest_framework import serializers
from users.models import CustomUser
from .models import Assignment
from users.serializers import RegisterSerializer

class AssignmentSerializer(serializers.ModelSerializer):
    uploaded_by = RegisterSerializer(read_only=True)
    file_url = serializers.SerializerMethodField()

    class Meta:
        model = Assignment 
        fields = [
            'id',
            'title',
            'description',
            'file',
            'updated_at',
            'created_at',
            'file_size',
            'file_type',
        ]
        read_only_fields = ['file_size', 'file_type', 'updated_at']
    
    def get_file_url(self, obj):
        request = self.context.get('request')
        if obj.file and request:
            return request.build_absolute_uri(obj.file.url)
        return None
