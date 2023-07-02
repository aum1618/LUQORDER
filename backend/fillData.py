import os
import django

# Set the Django settings module
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

# Initialize Django
django.setup()


from blog.models import Category, Blog, Section

categories = ["ethereum", "cardano", "cosmos", "polygon", "quant", "solana", "veChain"]

bitcoin_category = Category.objects.get(
    name="BitCoin"
)  # Get the existing "bitcoin" category

for category_name in categories:
    category, created = Category.objects.get_or_create(
        name=category_name
    )  # Get or create the category

    if created:
        print(f"Created category: {category}")

    blog = Blog.objects.create(heading="Blogger", category=category, date="2023-06-23")

    section_data = {
        "title": "This is My Title",
        "description": "Bitcoin uses peer-to-peer technology...",
        "image": "http://127.0.0.1:8000/media/section_images/Screenshot_1687268572.png",
        "blog": blog,
    }

    section = Section.objects.create(**section_data)

    print(f"Created blog with category '{category_name}'")
