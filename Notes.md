## Assesment Question 1 (Frontend - React):
A simple frontend web application was built using React, a popular JavaScript library for building user interfaces. The application provides functionality for user registration, login, and profile management. It includes several React hooks (useState) to manage the application's state and conditional rendering to display different components based on user interactions. However for this part no databases is used to store the data.<br><br>

Here's a summary of the main functionalities:
1. User Registration
+ Users can input their username, email, and password to register.
+ The code includes basic input validation for username, password, and email format.
+ Password visibility either close or see the password when the user clicks the eye icon.
+ After successful registration, the user data is saved in the registeredUser state, and the user is informed about the successful registration.
+ No database is used to store the data.
+ The input fields are cleared after registration.<br> <br>
2. User login
+ Registered users can log in with their username and password.
+ The code checks if the user is registered and if the entered credentials match the stored data.
+ If the login is successful, the user is greeted with their username and shown their profile details.
+ Users are given an option to edit their profile, including writing about themselves, hobbies, education, and skills. <br><br>
3. Profile Management
+ Users can write about themselves and save drafts before submitting the final profile.
+ Users can edit their profile, update profile details (hobbies, education, skills), and save changes. <br> <br> <br>

## Assesment Question 2 (Backend - Flask):
A simple backend web application built using Flask, a Python web framework. The application provides functionalities for user registration, login, and a simple dashboard feature with logout button. It uses MySQL as the database to store user information and sessions to manage user logins. <br> <br>

1. User Registration:
+ Users can register by providing a username and password.
+ The registration data is inserted into the users table in the MySQL database. <br><br>
  
2. User Login:
+ Users can log in using their username and password.
+ The code checks if the provided credentials match any records in the users table.
+ If the login is successful, a session is created with the user's username. <br><br> 

3. Dashboard:
+ Logged-in users can access the dashboard, which displays their username. <br><br> 

4. User Logout:
+ Logged-in users can log out by sending a POST request to the /logout route.
+ The user's username is removed from the session after logging out. <br><br> 

   

