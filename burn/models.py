from django.db import models


class Bill(models.Model):
    """ monthly bills
    """
    name = models.CharField(max_length=250)
    description = models.TextField(null=True, blank=True)
    payment_day = models.PositiveIntegerField(default=0)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"