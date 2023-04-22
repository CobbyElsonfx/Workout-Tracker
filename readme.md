# Exercise Tracker

### This is a MERN stack web application that allows you to track exercises you do every day. It uses Node.js and Express for the backend, and React for the frontend. The application manages the state using React's useContext and useReducer hooks.
## Getting Started

## To run the application locally, you need to have Node.js and MongoDB installed on your machine. Then, follow these steps:

   1. Clone this repository to your local machine
   2. In the root directory of the project, run npm install to install the required dependencies
   3. Run npm start to start the backend server on port 5000
   4. In a new terminal window, navigate to the client directory and run npm install to install the frontend dependencies
   5. Run npm start to start the React development server on port 3000
   6. Open your browser and go to http://localhost:3000 to view the application

## Usage

### The application allows you to create new exercises, edit existing ones, and delete them. To create a new exercise, click on the "Create Exercise" button and fill in the form. To edit an existing exercise, click on the "Edit" button next to the exercise you want to edit, make your changes, and click on the "Save" button. To delete an exercise, click on the "Delete" button next to the exercise you want to delete.
## Future Improvements

### Currently, the application does not use any authentication, so anyone can create, edit, or delete exercises. In the future, we plan to add authentication using a third-party service like Google or Facebook, or by implementing our own authentication system using JWT.
## Contributing

### We welcome contributions from anyone! If you find a bug or want to suggest an improvement, please create a new issue or submit a pull request.
## License

### This project is licensed under the MIT License - see the LICENSE file for details.


### CORS - Cross Origin Request Error is an error emitted when a frontend server tries to make a request to backend server hosted on a different server. In this a application the backend server is hosted on localhost:8585 whiles the front end is hosted on localhost: 5173.  In order to avoid this type of error you can add a proxy and set it to the server on which the backend is hosted example proxy: localhost:8585