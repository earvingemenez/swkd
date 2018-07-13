from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext, gettext_lazy as _

from .models import User, Invoice


class UserAdmin(UserAdmin):
    model = User

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name',
            'email', 'birthdate', 'image', 'salary_rate')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )

    readonly_fields = ('date_joined',)
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    ordering = ('email',)


class InvoiceAdmin(admin.ModelAdmin):
    model = Invoice


admin.site.register(User, UserAdmin)
admin.site.register(Invoice, InvoiceAdmin)