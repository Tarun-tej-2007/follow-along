# **ESHOP Project**  
-Project Structure
- Frontend (React or Angular) Frontend is built using either React (for MERN) or Angular (for MEAN). The folders include the following: Tech-Stack: Frontend-HTML,CSS,React Backend-MongoDB,Express,Node.JS

components pages router

-Backend (Node.js with Express) The backend is built with Node.js and Express and is structured as follows: models routers controllers config server.js db



## **MILESTONE 1 🎯**  
- Built scalable APIs and implemented secure login and registration.  
- Designed a structured database schema using MongoDB.  
- Developed a robust backend with Node.js and Express.  
- Understood the overall project vision and explored a live demo of the e-commerce application.  

## **MILESTONE 2 🐣**  
- Set up the development environment and installed necessary tools.  
- Learned how the frontend communicates with the backend using APIs.  
- Created a basic server with Node.js and Express.  
- Organized the project into frontend and backend directories.  
- Initialized a React frontend, configured Tailwind CSS, and built the login page.  

## **MILESTONE 3 🌐**  
- Structured backend folders for routes, controllers, models, and middleware.  
- Set up a Node.js and Express server and connected it to MongoDB.  
- Implemented error handling for debugging and user feedback.  
- Laid the foundation for efficient backend development.  

## **MILESTONE 4 🌟**  
- Created the **User Model** to define user data structure in MongoDB.  
- Developed a **User Controller** to manage user interactions and responses.  
- Integrated **Multer** for file uploads, allowing users to upload profile pictures.  

## **MILESTONE 5 💡**  
- Designed the **Sign-Up Page** with fields for name, email, and password.  
- Added form validation to ensure correct user input.  
- Ensured a clean and user-friendly UI.  
- Updated project documentation in the README file.  

---

This keeps it concise while highlighting key learning points. Let me know if you need any changes! 🚀

## **MILESTONE 6 **
User Authentication - Password Encryption & Secure Storage of Data
Overview
In this task, we are to increase security within user authentication through encrypting the password and storing the user's data securely within the database. We will hash passwords using bcrypt prior to storage so that credentials are secure.

--Steps Taken
1. Encryption of the Password
Utilized bcrypt to hash the password of the user on signup.
Kept the hashed password rather than plaintext within the database.
Ensured safe authentication by hashing passwords at login and comparing the hashes.
2. Storing Entire User Information
Stored necessary user information (e.g., name, email, etc.) captured during registration in the database.
Ensured passwords were stored in encrypted form at all times.
Secured the database by ensuring sensitive data was never stored in plain text.
Technologies Used
Node.js & Express – Backend framework.
MongoDB & Mongoose – Database management.
bcrypt – Password hashing for security.
--Expected Outcome
Passwords are hashed securely prior to storage.
User information is securely saved in the database.
It is done through encrypted credentials.
This provides a safe authentication mechanism for the application. ????
