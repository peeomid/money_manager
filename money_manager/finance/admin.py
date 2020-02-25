from django.contrib import admin
from django import forms

from . import models


class CategoryAdminForm(forms.ModelForm):

    class Meta:
        model = models.Category
        fields = "__all__"


class CategoryAdmin(admin.ModelAdmin):
    form = CategoryAdminForm
    list_display = [
        "user",
        "name",
        "description",
        "last_updated",
        "created",
    ]


class TransactionAdminForm(forms.ModelForm):

    class Meta:
        model = models.Transaction
        fields = "__all__"


class TransactionAdmin(admin.ModelAdmin):
    form = TransactionAdminForm
    list_display = [
        "transaction_type",
        "date",
        "description",
        "last_updated",
        "created",
        "amount",
    ]


admin.site.register(models.Category, CategoryAdmin)
admin.site.register(models.Transaction, TransactionAdmin)
