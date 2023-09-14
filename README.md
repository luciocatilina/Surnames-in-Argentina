# Surnames-in-Argentina

Surnames in Argentina Project

This Django project allows users to input a last name and receive an interactive visualization of the frequency of that last name in a MongoDB database hosted on MongoDB Atlas. The data is represented on an interactive map for easy understanding.
Environment Setup

Before running the application, make sure you have Python, Django, and the required libraries installed. You can install the dependencies using pip:

pip install -r requirements.txt

atabase Configuration

This project uses MongoDB as the database to store last name data and its frequency. Make sure you have set up a database in MongoDB Atlas and provided its URI in the environment variables as mentioned above.

Next, you can create the necessary collections in your MongoDB database to store last name data and its frequency. You can use tools like pymongo to import data or add it manually.
Running the Application

To run the application, use the following command:

python manage.py runserver

Using the Application

    1-Open your web browser and navigate to http://localhost:8000/.
    2-Enter a last name in the search field and click the "Search" button.
    3-The application will query the MongoDB database and display an interactive map with the frequency of that last name in different geographical locations.

