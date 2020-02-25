from django.db import models
from django.urls import reverse
from django.contrib.auth import get_user_model

User = get_user_model()


class Category(models.Model):

    #  Relationships
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    #  Fields
    name = models.TextField()
    description = models.TextField(null=True, blank=True)
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    created = models.DateTimeField(auto_now_add=True, editable=False)

    class Meta:
        unique_together = (
                ('name', 'user')
            )

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("finance:finance_category_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("finance:finance_category_update", args=(self.pk,))


class Transaction(models.Model):
    TYPE_INCOME = 1
    TYPE_EXPENSE = 2
    TYPES = (
            (TYPE_INCOME, "Income"),
            (TYPE_EXPENSE, "Expense")
        )

    #  Relationships
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey("Category", on_delete=models.CASCADE)

    #  Fields
    transaction_type = models.IntegerField(choices=TYPES)
    date = models.DateField()
    description = models.TextField()
    last_updated = models.DateTimeField(auto_now=True, editable=False)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        pass

    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self):
        return reverse("finance_Transaction_detail", args=(self.pk,))

    def get_update_url(self):
        return reverse("finance_Transaction_update", args=(self.pk,))
