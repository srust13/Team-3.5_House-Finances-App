# Team-3.5_House-Finances-App
There are 3 parts to this app. In this directory are the backend files, which are hosted as Google Cloud functions and allow the webapp and mobile app to interface with the database through one unified API.

This project aims to provide a way for people in shared residences to manage shared and recurring expenses and one day help in financial planning and analytics for groups of young adults. 

## Backend
The backend is a node.js server that provides routing to a number of end points that are leveraged by the mobile and web apps. The API interacts with the Google Cloud firestore to persist user data.

## Webapp
The web app uses a React.js front end to interact with the API

## Mobile 
The mobile app is flutter built and leverages the same API as the webapp.
