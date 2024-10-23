# YouTube Clone Deployment Guide

This guide will help you edit and deploy your YouTube clone project, including both the backend and frontend components.

## Prerequisites

1. **Node.js**: Install from [Node.js official website](https://nodejs.org/).
2. **MongoDB**: Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution or install MongoDB locally.
3. **Git**: Download from [Git official website](https://git-scm.com/).
4. **Heroku CLI**: Install from [Heroku's official website](https://devcenter.heroku.com/articles/heroku-cli).
5. **Netlify CLI**: Install from [Netlify's official website](https://docs.netlify.com/cli/get-started/).

## Step 1: Clone the Repository

Clone this project repository:
```
bash
git clone https://github.com/MeherMankar/YouTube-clone
cd youtube-clone
```

## Step 2: Edit the Code

### 2.1 Environment Variables

Create a .env file in the backend directory:

plaintext
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

Replace <your-mongodb-uri> and <your-jwt-secret> with your actual values.

### 2.2 Backend Configuration

1. Open backend/server.js and ensure the server listens on the correct port.
2. Handle CORS properly to allow requests from your frontend domain.

### 2.3 Frontend Configuration

1. Open frontend/src/App.js and verify that the routes are correctly set.
2. Adjust API URLs in each component to match your backend deployment URL later.

## Step 3: Test Locally

### 3.1 Start the Backend Server

Navigate to the backend directory:
```
bash
cd backend
```
Install dependencies:
```
bash
npm install
```
Start the server:
```
bash
node server.js
```
### 3.2 Start the Frontend Application

Open another terminal window and navigate to the frontend directory:
```
bash
cd frontend
```
Install dependencies:
```
bash
npm install
```
Start the React application:
```
bash
npm start
```
Your application should be running on http://localhost:3000.

## Step 4: Prepare for Deployment

### 4.1 Build the Frontend

In the frontend directory, create a production build of your React application:
```
bash
npm run build
```
This generates a build folder containing static files.

## Step 5: Deploy Backend on Heroku

### 5.1 Create a New Heroku App

Log in to Heroku:
```
bash
heroku login
```
Create a new app:
```
bash
heroku create <your-app-name>
```
### 5.2 Set Environment Variables on Heroku

Set environment variables in Heroku:
```
bash
heroku config:set MONGODB_URI=<your-mongodb-uri>
heroku config:set JWT_SECRET=<your-jwt-secret>
```
### 5.3 Deploy Your Code

1. Initialize a Git repository if not already done:
```
   bash
   git init
   git add .
   git commit -m "Initial commit"
```   
2. Add Heroku as a remote repository:
```
   bash
   heroku git:remote -a <your-app-name>
```   
3. Push your code to Heroku:
```
   bash
   git push heroku master
```   
Heroku will build and deploy your backend application.

## Step 6: Deploy Frontend on Netlify

### 6.1 Create a New Site on Netlify

1. Go to [Netlify](https://www.netlify.com/) and log in or sign up.
2. Click on "New site from Git".
3. Connect your Git provider (GitHub, GitLab, Bitbucket).
4. Select your repository.
5. In the build settings:
   - **Branch to deploy**: master
   - **Build command**: npm run build
   - **Publish directory**: build
6. Click "Deploy site".

## Step 7: Update Frontend API URLs

After deploying both backend and frontend, update your API calls in the frontend code to point to your deployed backend URL.

For example, replace:

javascript
const response = await axios.post('http://localhost:5000/api/users/login', formData);

with:

javascript
const response = await axios.post('<your-heroku-backend-url>/api/users/login', formData);

## Step 8: Final Testing

1. Visit your Netlify URL for the frontend.
2. Test all functionalities (registration, login, video upload, etc.) to ensure everything is working as expected.

## Step 9: Monitor and Maintain

1. Use tools like [Heroku Dashboard](https://dashboard.heroku.com/) for monitoring your backend app.
2. Use [Netlify Dashboard](https://app.netlify.com/) for monitoring your frontend app.

## Conclusion

You now have a fully functional YouTube clone deployed with a backend on Heroku and a frontend on Netlify! Make sure to continually monitor for any issues and update your code as necessary.

