from rest_framework.views import APIView
# from rest_framework.permissions import IsAuthenticated
# from django.contrib.auth.decorators import login_required
from .serializers import BlogPostSerializer, MessageSerializer, ProjectSerializer
from .models import Messages, Project, BlogPost
from rest_framework import status
from rest_framework.response import Response
# from django.views.decorators.csrf import csrf_exempt
# from django.utils.decorators import method_decorator

# Create your views here.


# class AllProducts(APIView):
#     def get(self, request, format=None):
#         item = i_stock.objects.all()
#         serializer = InvestorySerializers(item, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)


class ProjectView(APIView):
    def get(self, request, format=None):
        project = Project.objects.all()
        serializer = ProjectSerializer(project, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class SendMessage(APIView):
    serializer_class = MessageSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': 'Message sent Successfully'}, status=status.HTTP_201_CREATED)
        return Response({'error': 'Bad Request'}, status=status.HTTP_400_BAD_REQUEST)


class AllBlogPosts(APIView):
    def get(self, request, format=None):
        posts = BlogPost.objects.all()
        serializer = BlogPostSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class GetCSRFToken(APIView):
    def get(self, request, format=None):
        return Response({'success': 'CSRF cookie set'})


class OneBlogPost(APIView):
    lookup_kwargs = 'blog_slug'

    def get(self, request, format=None):
        blog_slug = request.GET.get(self.lookup_kwargs)
        if blog_slug != None:
            blog = BlogPost.objects.filter(blog_slug=blog_slug)
            if blog.exists():
                blogpost = BlogPostSerializer(blog[0]).data
                return Response(blogpost, status=status.HTTP_200_OK)
            else:
                return Response({'Error': 'BlogPost not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'Error': 'No Blog_ID Provided'}, status=status.HTTP_400_BAD_REQUEST)


# @method_decorator(csrf_exempt, name='dispatch')
# class CartAdd(APIView):

#     permission_classes = [IsAuthenticated]

#     def post(self, request, id):
#         content = {
#             'user': str(request.user),  # `django.contrib.auth.User` instance.
#             'auth': str(request.auth),  # None
#         }
#         cart = Cart(request)
#         queryset = i_stock.objects.filter(id=id)
#         if queryset.exists():
#             product = queryset[0]
#             cart.add(product=product)
#             print(cart)
#             return Response({'Success': 'Item added to Cart'}, status=status.HTTP_200_OK)
#         else:
#             return Response({'Error': 'Item does not Exist'}, status=status.HTTP_400_BAD_REQUEST)


# @method_decorator(csrf_exempt, name='dispatch')
# class ClearItem(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request, id):
#         cart = Cart(request)
#         queryset = i_stock.objects.filter(id=id)
#         if queryset.exists():
#             product = queryset[0]
#             cart.remove(product)
#             return Response({'Success': 'Item Removed to Cart'}, status=status.HTTP_200_OK)
#         else:
#             return Response({'Error': 'Item does not Exist'}, status=status.HTTP_400_BAD_REQUEST)


# @method_decorator(csrf_exempt, name='dispatch')
# class AddItem(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request, id):
#         cart = Cart(request)
#         product = i_stock.objects.get(id=id)
#         cart.add(product=product)
#         return Response({'Success': 'Item added to Cart'}, status=status.HTTP_200_OK)


# @method_decorator(csrf_exempt, name='dispatch')
# class DecrementItem(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request, id):
#         cart = Cart(request)
#         product = i_stock.objects.get(id=id)
#         cart.decrement(product=product)
#         return Response({'Success': 'Item Decremented from Cart'}, status=status.HTTP_200_OK)


# @method_decorator(csrf_exempt, name='dispatch')
# class ClearCart(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         cart = Cart(request)
#         cart.clear()
#         return Response({'Success': 'Cart Cleared'}, status=status.HTTP_200_OK)


# @method_decorator(csrf_exempt, name='dispatch')
# class ViewCart(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         print(Cart)
#         return Response(request.data, status=status.HTTP_200_OK)
