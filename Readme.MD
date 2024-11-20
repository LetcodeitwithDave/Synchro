# Synchro – File Upload Storage Application

**Synchro** is a file storage and management platform that allows users to easily upload, organize, and track their documents. It enables categorization of files for better accessibility, and features a user-friendly interface. Built with **Django REST Framework** for the backend and **React** for the frontend, Synchro aims to provide a secure and seamless file management experience.

## Features

- **User Authentication**: Secure login and registration using JWT-based authentication.
- **File Upload**: Upload files securely to the platform.
- **File Categorization**: Organize files into categories for easier access and retrieval.
- **File Management**: View, download, and delete files with ease.
- **Responsive Design**: Fully responsive design optimized for both desktop and mobile devices.
- **Data Security**: All file data is securely stored and protected.

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
  - Currently under development. Deployment plans are underway.

## Getting Started

To run the project locally, follow these instructions:

### Prerequisites

Make sure you have the following installed:

- **Node.js** (for the frontend)
- **npm** or **yarn** (for managing frontend packages)
- **Python 3.x** (for the backend)
- **Django 3.x or 4.x** (for the backend)
- **PostgreSQL** (for the database)

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/synchro.git
cd synchro```

### Backend Setup:

1. Navigate to the backend/ directory:



cd backend

2. Create and activate a virtual environment:



python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

3. Install the required Python dependencies:



pip install -r requirements.txt

4. Set up the database (make sure PostgreSQL is installed and running):



python manage.py migrate

5. Create a superuser to access the admin panel:



python manage.py createsuperuser

6. Run the Django development server:



python manage.py runserver

Frontend Setup:

1. Navigate to the frontend/ directory:



cd frontend

2. Install the required npm packages:



npm install

3. Start the React development server:



npm start

The application should now be running at http://localhost:3000 and the API at http://localhost:8000.

Usage

Login/Signup: Users can sign up or log in using JWT authentication.

Upload Files: Once logged in, users can upload files, which are categorized based on their selection.

Manage Files: Users can view, download, and delete their uploaded files.


Testing

To run the test suite for the backend:

python manage.py test

To run frontend tests (if implemented):

npm test

Screenshots

Include a few screenshots or GIFs to showcase your app:



Contributing

Contributions are welcome! To contribute, please fork the repository and create a pull request. Ensure your code follows the existing code style and that you have tested your changes before submitting.

Steps to Contribute:

1. Fork the repository


2. Create a new branch:



git checkout -b feature/your-feature-name

3. Make your changes


4. Commit your changes:



git commit -am 'Add new feature'

5. Push to the branch:



git push origin feature/your-feature-name

6. Create a new Pull Request



License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements

Django: The web framework used for the backend.

Django REST Framework: The toolkit for building Web APIs.

React: The frontend library used for building the user interface.

Tailwind CSS: The utility-first CSS framework used for styling.


### What's Included:
1. **Backend Setup**: The instructions to create and activate a virtual environment, install dependencies, set up the database, create a superuser, and run the Django server.
2. **Frontend Setup**: Clear instructions on installing dependencies and starting the React development server.

This should now provide a complete guide for setting up both the backend and frontend environments for the project.

