from rest_framework import parsers, renderers
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

from .serializers import AuthTokenSerializer, AuthSerializer, UserSerializer


class Login(APIView):
    """ token authentication
    """
    authentication_classes = ()
    permission_classes = (AllowAny,)
    parser_classes = (parsers.FormParser, parsers.MultiPartParser, parsers.JSONParser,)
    render_classes = (renderers.JSONRenderer,)
    serializer_class = AuthTokenSerializer

    def post(self, *args, **kwargs):
        serializer = self.serializer_class(data=self.request.data,
            context={'request': self.request})
        serializer.is_valid(raise_exception=True)

        return Response({
            'token': serializer.get_token().key,
            'user_id': serializer.user.id,
        })