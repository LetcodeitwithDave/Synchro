import os

FILE_CATEGORIES = {
    "documents": [".pdf", ".doc", ".docx", ".txt", ".csv", ".fig", ".sketch", ".xd"],
    "images": [".jpg", ".jpeg", ".png", ".gif", ".svg"],
    "media": [".mp4", ".mp3", ".wav", ".mkv"],
    "others": []  # Files that don't fit other categories
}

def get_category_by_extension(file_extension):
    """Determine the category of a file based on its extension."""
    for category, extensions in FILE_CATEGORIES.items():
        if file_extension.lower() in extensions:
            print(category)
            print(file_extension.lower())
            print(extensions)
            print(FILE_CATEGORIES.items()) 
    return print("others") 

get_category_by_extension('.sVg')