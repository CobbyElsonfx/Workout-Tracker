# Exercise Tracker
# Live Link: https://exercise-tracker-frontend-e4pd.onrender.com
# screenshots
#### Desktop View
![Home Page](Screenshot 2023-05-23 at 4.02.58 PM 1![image](https://github.com/CobbyElsonfx/Exercise-Tracker/assets/109095646/79d1e8e8-4c51-4b27-b46a-582c1eec3b2e)
)

#### Mobile View 
Screenshot 2023-05-23 at 4.16.22 PM![image](https://github.com/CobbyElsonfx/Exercise-Tracker/assets/109095646/4d483d65-1fc5-495f-89fa-8875aacf43cc)



### This is a MERN stack web application that allows you to track exercises you do every day. It uses Node.js and Express for the backend, and React for the frontend. The application manages the state using React's useContext and useReducer hooks and jwt for authentication.
## Getting Started

### To run the application locally, you need to have Node.js and MongoDB installed on your machine. Then, follow these steps:

   1. Clone this repository to your local machine
   2. In the root directory of the project, run npm install to install the required dependencies
   3. Run npm run dev to start the backend server on port 8585
   4. In a new terminal window, navigate to the frontend directory and run npm install to install the frontend dependencies
   5. Run npm run dev to start the React development server on port 5173
   6. Open your browser and go to http://localhost:5173 to view the application

## Usage
The application allows you to create new exercises, edit existing ones, and delete them. To create a new exercise, click on the "Add Workout" button and fill in the form. To delete an exercise, click on the "Delete" button next to the exercise you want to delete.
## Future Improvements

 In the future, I plan to add authentication using a third-party service like Google or Facebook.
## Contributing

 We welcome contributions from anyone! If you find a bug or want to suggest an improvement, please create a new issue or submit a pull request.

## Challenges
 ### DATABASE WORKOUT SHOWCASE 
After I adding the authentication I realised that when a user logs in he sees the workout added by other users, which means every user is presented with all the workouts in the database. 

I accessed the user.id  from the requireAuth middleware (id was extracted from the token returned from the authorization header) in the workout controller , where  I attached it to the user object and saved it to the database. I updated the model by inlcuding a userId section so that each workout saved in the database could be retrieved using the current userId it was assigned to.

## License

### This project is licensed under the MIT License - see the LICENSE file for details.

### NOTES:
  CORS - Cross Origin Request Error is an error emitted when a frontend server tries to make a request to backend server hosted on a different server. In this a application the backend server is hosted on localhost:8585 whiles the front end is hosted on localhost: 5173.  In order to avoid this type of error you can add a proxy and set it to the server on which the backend is hosted example proxy: localhost:8585
