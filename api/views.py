from rest_framework.views import APIView
# from rest_framework.permissions import IsAuthenticated
# from django.contrib.auth.decorators import login_required
from .serializers import AboutSerializer, BlogPostSerializer, HomePageSerializer, MessageSerializer
from .models import TAGS, AboutUs, Messages, BlogPost
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


# class ProjectView(APIView):
#     def get(self, request, format=None):
#         project = Project.objects.all()
#         serializer = ProjectSerializer(project, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)


# class CreateProject(APIView):
#     serializer_class = ProjectSerializer

#     def post(self, request, format=None):
#         serializer = self.serializer_class(request)
#         if serializer.is_valid():
#             project_description = request.data.get('project_description')
#             before_images = request.FILES.get('before_images')
#             progress_images = request.FILES.get('progress_images')
#             after_images = request.FILES.get('after_images')
#             project_tag = request.data.get('project_tag')
#             for image in before_images:
#                 for image in progress_images:
#                     for image in after_images:
#                         project = Project(
#                             project_description=project_description,
#                             before_images=before_images,
#                             progress_images=progress_images,
#                             after_images=after_images,
#                             project_tag=project_tag)
#                         project.save()


class CreateAboutUs(APIView):
    serializer_class = AboutSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            about_us = serializer.data.get('about_us')
            q_set = AboutUs.objects.filter(id=1)
            if q_set.exists():
                aboutUs = q_set[0]
                aboutUs.about_us = about_us
                aboutUs.save(update_fields=['about_us'])
                return Response({'About Description Added': 'Continue'}, status=status.HTTP_200_OK)
            serializer.save()
            return Response({'New About Description Added': 'Please Continue'}, status=status.HTTP_200_OK)
        else:
            return Response({'Invalid Data': 'Bad Request'}, status=status.HTTP_400_BAD_REQUEST)


class ViewAboutUs(APIView):
    def get(self, request, format=None):
        about = AboutUs.objects.get(id=1)
        AboutUsData = AboutSerializer(about)
        return Response(AboutUsData.data, status=status.HTTP_200_OK)


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


class UpdateHomePage(APIView):
    serializer_class = HomePageSerializer

    def post(self, request, format=None):
        serializer = HomePageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'Success': 'Image and Text uploaded successfully'}, status=status.HTTP_200_OK)
        return Response({'Error': 'Invalid Data'}, status=status.HTTP_400_BAD_REQUEST)


class DeleteHomePage(APIView):
    def post(self, request, format=None):
        pass


# class ShowCategory(APIView):
#     def get(self, request, format=None):
#         category = TAGS.__getattribute__
#         return Response(category, status=status.HTTP_200_OK)
