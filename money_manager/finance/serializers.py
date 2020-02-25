from rest_framework import serializers

from . import models


class CategorySerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = models.Category
        fields = [
            "name",
            "description",
            "user",
            "last_updated",
            "created",
        ]
        read_only_fields = ('last_updated', 'created_')

class TransactionSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = models.Transaction
        fields = [
            "transaction_type",
            "date",
            "user",
            "category",
            "description",
            "last_updated",
            "created",
            "amount",
        ]
        read_only_fields = ('last_updated', 'created_')

    def validate_category(self, value):
        user = self.context['request'].user
        if value.user == user:
            return value
        raise serializers.ValidationError('Invalid category')
