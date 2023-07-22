# Internship-Assesment 
Name: Kishwanth A/L Hari Krishnan <br>
Internship period : October 2023 - March 2024 (24 weeks/6 months) <br>
HP Number : 016-968 4170 <br>
Email : kishwanth21@yahoo.com
<br><br>
## Assesment Question 1
### Introduction
The Web App provides a straightforward way to handle user registration, login, and profile management within a React-based web application. Users can register an account with a valid username, email, and password. Once registered, users can log in with their credentials, view and edit their profile information, including an "About Me" text, hobbies, education, and skills.

### Features
+ User Registration: Users can create an account by providing a unique username, a valid email address, and a strong password. The password is required to have at least one capital letter, one special character, one number, and be at least 8 characters long. <br>
+ User Login: Registered users can log in using their username and password to access their profile. <br>
+ Profile Management: Once logged in, users can view their profile, including their "About Me" text, hobbies, education, and skills. <br>
+ Edit Profile: Users can edit their profile information, including updating their "About Me" text, hobbies, education, and skills. <br>
+ Password Visibility Toggle: During registration and login, users can toggle password visibility to ensure they entered the correct password. <br>

### Getting Started
1. Install the required dependencies using npm:
   + npm install
2. The main code is in App.js filed and styled in App.css file.
3. To run the Web App locally, execute the following command:
   + npm start
     
The application will run on http://localhost:3000 in your web browser

### Programming Language/Tools Used
The web application is built using the following technologies:

+ React: A popular JavaScript library for building user interfaces.
+ FontAwesome: A library for adding icons to the application.
+ CSS: For styling the application's components.

<br><br>
## Assesment Question 2
This is a simple Flask web application that provides user registration, login, and a logout functionality. The application allows users to create an account, log in, and log out.

### Setup and Requirements
Before running the application, make sure you have the following requirements installed:

+ Python (3.6 or higher)
+ Flask (1.1.2 or higher)
+ Flask-MySQL (or any other preferred MySQL library)

You can install Flask and other required packages using pip:
+ pip install flask flask-mysqldb

### Getting Started
1. Create a MySQL database named try with the appropriate table structure. You can use the following SQL commands:
   + CREATE DATABASE try;
<br> USE try;
<br> CREATE TABLE users (
  <br>  id INT AUTO_INCREMENT PRIMARY KEY,
   <br> username VARCHAR(50) NOT NULL UNIQUE,
   <br> password VARCHAR(100) NOT NULL
);

2. Update the MySQL database configuration in the app.py file:
   + app.config['MYSQL_HOST'] = 'localhost'
<br> app.config['MYSQL_USER'] = 'your_mysql_username'
<br> app.config['MYSQL_PASSWORD'] = 'your_mysql_password'
<br> app.config['MYSQL_DB'] = 'try'
<br> app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

3. Run the Flask application:
   + python app.py

### Programming Language/Tools Used
The web application is built using the following technologies:

+ Python: Core programming language for building the web application. .
+ MYSQL Database: To store the user's data.
+ CSS: For styling the application's components.
