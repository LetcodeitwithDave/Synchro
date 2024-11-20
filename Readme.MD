# Synchro – File Upload Storage Application

Synchro is a file storage and management platform designed to help users upload, organize, and track their documents with ease. It allows users to categorize files and access them efficiently through a simple, user-friendly interface. Built with **Django REST Framework** for the backend and **React** for the frontend, Synchro aims to offer a secure and seamless file management experience.

## Features

- **User Authentication**: Secure login and registration with JWT-based authentication.
- **File Upload**: Users can upload files, which are stored securely.
- **File Categorization**: Organize files into categories for easier access and retrieval.
- **File Management**: View, delete, and download files with ease.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Data Security**: File data is securely stored and protected.

## Technologies Used

- **Frontend**:  
  - React (JavaScript library for building user interfaces)  
  - Tailwind CSS (for styling the frontend)

- **Backend**:  
  - Django (Python web framework)  
  - Django REST Framework (for building the API)  
  - PostgreSQL (database for storing user and file data)

- **Authentication**:  
  - JWT (JSON Web Tokens) for secure user authentication

- **Deployment**:  
  - Currently not deployed, but plans for deployment are underway.

## Getting Started

To run the project locally, follow the instructions below:

### Prerequisites

- **Node.js** (for the frontend)
- **npm** or **yarn** (for managing packages)
- **Python 3.x** (for the backend)
- **Django 3.x or 4.x** (for the backend)
- **PostgreSQL** (for the database)

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/synchro.git
cd synchro

### Set up the backend:

1. **Navigate to the backend/ directory**.


```bash
cd backend

2. **Create and activate a virtual environment**:


```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

3. **Install the required Python dependencies**:


```bash
pip install -r requirements.txt

4. **Set up the database (Make sure PostgreSQL is installed and running)**:


```bash
python manage.py migrate

5. **Create a superuser to access the admin panel**:


```bash
python manage.py createsuperuser

6. **Run the Django development server**:


```bash
python manage.py runserver

3. Set up the frontend:

Navigate to the frontend/ directory.


cd frontend

Install the required npm packages:


npm install

Start the React development server:


npm start

The application should now be running at http://localhost:3000 and the API at http://localhost:8000.

Usage

Login/Signup: Users can sign up or log in to their accounts using JWT authentication.

Upload Files: After logging in, users can upload files, which will be categorized based on the user's selection.

Manage Files: Users can view, download, and delete their uploaded files.


Testing

To run the test suite for the backend:

python manage.py test

To run frontend tests (if you have implemented any tests):

npm test

Screenshots

Include a few screenshots or GIFs to showcase your app. Example:



Contributing

Contributions are welcome! If you’d like to contribute, feel free to fork the repository and create a pull request. Please ensure that your code follows the existing code style and that you have tested your changes before submitting.

To get started, follow these steps:

1. Fork the repository


2. Create a new branch (git checkout -b feature/your-feature-name)


3. Make your changes


4. Commit your changes (git commit -am 'Add new feature')


5. Push to the branch (git push origin feature/your-feature-name)


6. Create a new Pull Request



License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements

Django - The web framework used for the backend

Django REST Framework - The toolkit for building Web APIs

React - The frontend library used for building the user interface

Tailwind CSS - The utility-first CSS framework used for styling
