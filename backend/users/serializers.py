from rest_framework import serializers
from .models import *


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            "id",
            "fullName",
            "email",
            "password",
            "rank",
            "department",
            "program",
        ]
        extra_kwargs = {"password": {"write_only": True}}


    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user

        