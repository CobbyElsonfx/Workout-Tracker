
<div align="center">
  <h3><b>Workout Tracker</b></h3>
</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Challenges](#challenges)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)


# 📖Workout Tracker <a name="about-project"></a>

**Workout Tracker** This is a MERN stack web application that allows you to track exercises you do every day. It uses Node.js and Express for the backend, and React for the frontend. The application manages the state using React's useContext and useReducer hooks and jwt for authentication..

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/reactjs">React</a></li>
  </ul>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></li>
  </ul>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/nodejs">Node (javascript)</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **Authentication with JWT**
- **Users can log their exercises**
- **Search Engine Optimization**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>


- [Live Demo Link](https://exercise-tracker-frontend-e4pd.onrender.com)
- ![Home Page](Screenshot 2023-05-23 at 4.02.58 PM 1![image](https://github.com/CobbyElsonfx/Exercise-Tracker/assets/109095646/79d1e8e8-4c51-4b27-b46a-582c1eec3b2e)
> 




<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>


>

### Challenges
 <p>DATABASE WORKOUT SHOWCASE </p> 
After I adding the authentication I realised that when a user logs in he sees the workout added by other users, which means every user is presented with all the workouts in the database. 

I accessed the user.id  from the requireAuth middleware (id was extracted from the token returned from the authorization header) in the workout controller , where  I attached it to the user object and saved it to the database. I updated the model by inlcuding a userId section so that each workout saved in the database could be retrieved using the current userId it was assigned to.



###  Prerequisites


To successfully execute this project, the following prerequisites are required:
<ul>
<li>Code Editor: Visual Studio</li>
<li>Version Control:Git</li>
<li>Node js Installed</li>
<li>Linters configuration</li>
</ul> 

```
Example command: npm install to install dependent package
               : npm install --save-dev hint@7.x to install webhint
               :npm install -g lighthouse to install lighthouse

```

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone https://github.com/CobbyElsonfx/Code-Future.git
```
### Install

Install this project with:

``` 
Install this project with:git and npm install
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Andoh Francis**

- GitHub: [@CobbyElsonfx](https://github.com/CobbyElsonfx)
- LinkedIn: [Andoh Francis](https://www.linkedin.com/in/andoh-francis-133aa7245/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **I will add some animations to make it more user friendly**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you liked this project and would like to support me, email me through my email address andohfrancis9187@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Special thanks to Students at Brightfield Tech Academy

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ❓ FAQ (OPTIONAL) <a name="faq"></a>

- **Where did you get the template for the website?**

  - Figma

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license">MIT</a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

