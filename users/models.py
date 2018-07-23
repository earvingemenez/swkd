from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from .mixins import InvoiceMixin
from .managers import UserManager
from .utils import user_media_path


class User(AbstractBaseUser, PermissionsMixin):
    """ user model
    """
    email = models.EmailField(max_length=500, unique=True)
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    birthdate = models.DateField(null=True, blank=True)
    image = models.ImageField(upload_to=user_media_path, null=True, blank=True)

    date_started = models.DateField(null=True, blank=True)
    salary_rate = models.DecimalField(max_digits=999, decimal_places=2, default=0.00)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    date_joined = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("first_name", "last_name")

    objects = UserManager()

    def __str__(self):
        return f"{self.email}"

    @property
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}".title()

    @property
    def get_display_name(self):
        if self.first_name and self.last_name:
            return f"{self.get_full_name}"
        return f"{self.email}"


class Invoice(InvoiceMixin, models.Model):
    """ salary invoice
    """
    PENDING = 'pending'
    SENT = 'sent'
    DECLINED = 'declined'
    STATUSES = (
        (PENDING, 'Pending'),
        (SENT, 'Sent'),
        (DECLINED, 'Declined')
    )

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    code = models.CharField(max_length=10, default="SWDPL-00000")

    gross = models.DecimalField(max_digits=999, decimal_places=2, default=0.00)
    deductions = models.DecimalField(max_digits=999, decimal_places=2, default=0.00)
    net = models.DecimalField(max_digits=999, decimal_places=2, default=0.00)

    status = models.CharField(max_length=20, choices=STATUSES, default=PENDING)

    date_sent = models.DateField(null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"({self.user}) {self.date_created}"



# SIGNALS
@receiver(post_save, sender=Invoice)
def auto_generate_invoice_code(sender, instance=None, created=False, **kwargs):
    if created:
        # generate a unique invoice code based on the user's
        # id and latest invoice.
        instance.code = instance.generate_id(instance.user)
        instance.save()
