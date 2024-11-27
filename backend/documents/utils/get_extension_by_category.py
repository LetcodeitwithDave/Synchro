import os
from django.apps import apps
from documents.models import CategoryClass
FILE_CATEGORIES = {
    "documents": [".docx", ".pdf", ".doc", ".txt", ".csv", ".fig", ".sketch", ".xd"],
    "images": [".jpg", ".jpeg", ".gif", ".svg", ".png"],
    "media": [".mp4", ".mp3", ".wav", ".mkv"],
    "others": []  # Files that don't fit other categories
}

def get_category_by_extension(file_extension):
    print('file in funciotn => ', file_extension)
    """Detrmine the category of a file based on its extension."""
    for category_name, extensions in FILE_CATEGORIES.items():
        print('extension => ', extensions)
        if file_extension.lower() in extensions:

            print(category_name)
            print(file_extension.lower())
            print(extensions)

            category,_ = CategoryClass.objects.get_or_create(name=category_name)
   

            return category
    category,_ = CategoryClass.objects.get_or_create(name=category_name)
    return category

# get_category_by_extension('.mp3')