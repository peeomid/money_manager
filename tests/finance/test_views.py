import pytest
import test_helpers

from django.urls import reverse
from django.test import Client


pytestmark = [pytest.mark.django_db]


def tests_Category_list_view():
    instance1 = test_helpers.create_finance_Category()
    instance2 = test_helpers.create_finance_Category()
    client = Client()
    url = reverse("finance_Category_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_Category_create_view():
    user = test_helpers.create_User()
    client = Client()
    url = reverse("finance_Category_create")
    data = {
        "Name": "text",
        "Description": "text",
        "user": user.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_Category_detail_view():
    client = Client()
    instance = test_helpers.create_finance_Category()
    url = reverse("finance:finance_category_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_Category_update_view():
    user = test_helpers.create_User()
    client = Client()
    instance = test_helpers.create_finance_Category()
    url = reverse("finance_Category_update", args=[instance.pk, ])
    data = {
        "Name": "text",
        "Description": "text",
        "user": user.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_Transaction_list_view():
    instance1 = test_helpers.create_finance_Transaction()
    instance2 = test_helpers.create_finance_Transaction()
    client = Client()
    url = reverse("finance_Transaction_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_Transaction_create_view():
    user = test_helpers.create_User()
    category = test_helpers.create_finance_Category()
    client = Client()
    url = reverse("finance_Transaction_create")
    data = {
        "type": "text",
        "date": datetime.now(),
        "description": "text",
        "amount": 1.0,
        "user": user.pk,
        "category": category.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_Transaction_detail_view():
    client = Client()
    instance = test_helpers.create_finance_Transaction()
    url = reverse("finance_Transaction_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_Transaction_update_view():
    user = test_helpers.create_User()
    category = test_helpers.create_finance_Category()
    client = Client()
    instance = test_helpers.create_finance_Transaction()
    url = reverse("finance_Transaction_update", args=[instance.pk, ])
    data = {
        "type": "text",
        "date": datetime.now(),
        "description": "text",
        "amount": 1.0,
        "user": user.pk,
        "category": category.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302
