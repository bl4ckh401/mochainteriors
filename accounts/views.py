from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.shortcuts import redirect, render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .serializers import CreateUserForm, LoginUserForm, UserSerializerWithToken
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response

# Create your views here.


class CurrentUser(APIView):

    def get(self, request):

        serializer = UserSerializerWithToken(request.user)
        return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RegisterUser(APIView):

    def post(self, request, format=None):
        serializer = CreateUserForm(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': 'User Created'}, status=status.HTTP_200_OK)
        return redirect(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RegisterUser(APIView):

    def post(self, request, format=None):
        serializer = CreateUserForm(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': 'User Created'}, status=status.HTTP_200_OK)
        return redirect(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginUser(APIView):

    def post(self, request, format=None):
        serializer = LoginUserForm(data=request.data)
        if serializer.is_valid():
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                next_url = request.GET.get('next')
                if next_url:
                    redirect(next_url)
                    return Response({'success': 'User Logged In'}, status=status.HTTP_200_OK)
                else:
                    redirect(request, '/products')
                    return Response({'success': 'User Logged In'}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'user not found'})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogUserOut(APIView):
    def post(request):
        logout(request)
        return redirect('login')


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    permission_classes = [AllowAny]

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class GetCSRFToken(APIView):
    def get(self, request, format=None):
        return Response({'success': 'CSRF cookie set'})
