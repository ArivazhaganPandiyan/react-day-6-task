/*
Guvi Learning Center - Course Information App Documentation
===========================================================

Project Overview:
================
The Guvi Learning Center Course Information App is a React-based web application designed to showcase various courses offered by Guvi,
 a platform dedicated to providing high-quality technical education. The app allows users to navigate through different courses, each with 
 its dedicated page providing information and details.

Components:
==========

App:
===
The main component managing routing and navigation.
Utilizes React Router for handling different routes.
Displays a navigation bar with links to various courses.
Includes a welcome message and renders the appropriate course component based on the selected route.

AllCourses:
==========
Displays a list of all courses available at Guvi.
Imports and renders individual course components (FullStack, DataScience, Cyber) to showcase each course.
Utilizes Flexbox for a clean and responsive layout.

FullStack, DataScience, CyberSecurity(Cyber):
=============================
Individual course components showcasing specific course details.
Includes an image, course title, and relevant information.
Provides a simple representation of the course content.

Carrer:
======
Displays a message directing users to visit Guvi's official website for more details about career opportunities.
Keeps the component simple and informative.

Routing:
=======
React Router is used for navigation, allowing users to switch between different course pages using the navigation bar.
The Routes component in the App component maps specific paths to corresponding course components.

Styling:
=======
CSS styling is implemented to create an aesthetically pleasing and responsive layout.
Flexbox is utilized to arrange courses in a row with spacing.
Media queries are used to ensure a good user experience across different screen sizes.

Usage:
=====
Navigation:
==========
Use the navigation bar to switch between different courses by clicking on the respective links (All Courses, FullStack, DataScience, Cyber, Career).

Course Pages:
============
Each course page provides specific information about the selected course, including an image and relevant details.

Career Section:
==============
Clicking on the "Career" link directs users to a simple message advising them to visit Guvi's official website for more details about career opportunities.

Running the Application:
=======================
Ensure that Node.js and npm are installed on your system.
Navigate to the project directory in the terminal.
Run npm install to install the project dependencies.
Run npm start to start the development server.
Open the application in your browser at http://localhost:3000.

Conclusion:
===========
The Guvi Learning Center Course Information App provides a user-friendly interface for exploring and learning about different courses offered by Guvi. 
The use of React Router and clean component structure makes navigation seamless, while the styling enhances the visual appeal of the application. 
The project serves as a showcase for presenting course information and encouraging users to explore further on the Guvi platform.
*/