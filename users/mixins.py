from django.apps import apps
from django.conf import settings


class InvoiceMixin(object):
    """ helper mixin for invoices
    """
    def __init__(self, *args, **kwargs):
        return super(InvoiceMixin, self).__init__(*args, **kwargs)

    def generate_id(self, user):
        """ generate invoice id
        """
        invoice = apps.get_model('users', 'Invoice').objects.filter(user=user).last()
        _format = settings.INVOICE_CODE_FORMAT.format(user.id)
        
        return f"{int(invoice.code.split(_format)[-1] if invoice else 0) + 1}"