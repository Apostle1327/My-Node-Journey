# 🎬 Movie Page Web App

A dynamic and visually engaging web application for showcasing movies, built with Express.js and MongoDB. Users can add new movies with metadata, browse the list of movies, and view detailed information about each movie. Features include file upload support and a responsive interface using Bootstrap and EJS.

## 🚀 Features

- **Add New Movies:**
  Upload movie posters and background images along with complete metadata like genre, rating, language, duration, and certification.

- **Browse Movies:**
  Explore a beautifully styled grid of recommended movies on the homepage.

- **View Movie Details:**
  Click any movie to access a detailed view featuring background imagery, movie info, and a simulated trailer section.

- **File Upload:**
  Upload movie assets (poster & background) securely with proper file-type validation.

## 📂 Project Folder Structure

```jsx
├── controllers/                     // Business logic for routes
│   └── moviePage.controller.js
├── databases/                      // MongoDB database connection
│   └── moviePage-Database.js
├── models/                         // Mongoose schemas and multer setup
│   └── moviePage-Model.js
├── node_modules/                   // Project dependencies (auto-generated)
├── routes/                         // Route definitions
│   └── moviePage.routes.js
├── views/                          // EJS templates for rendering HTML
│   ├── index.ejs
│   ├── addMovie.ejs
│   └── viewMovie.ejs
├── imageUploads/                   // Uploaded movie poster & background images
├── .gitignore                      // Files and directories to be ignored by Git
├── App.js                          // Main Express application file
├── package-lock.json               // Dependency lock file
├── package.json                    // Project metadata and scripts
└── README.md                       // Project documentation
```

## 🏗️ How to Use

1. **Clone the Repository:**

```bash

```

2. **Navigate to the Project Directory:**

```bash
cd
```

3. **Install Dependencies:**
   Install the required Dependencies using this command

```bash
  npm install
```

4. **Start the Application:**

```bash
  node App.js
```

5. **Open in Browser:**
   Navigate to Localhost url in your web browser to view the application.

## 👤 Usage

- **Add a Movie:**
  Navigate to /addMoviePage to input new movie details and upload images.

- **Homepage Listing:**
  View all uploaded movies with poster previews and rating badges.

- **Detailed Movie View:**
  Click on a movie to view its full description, certification, runtime, genres, and more.

- **Responsive Experience:**
  Enjoy a seamless experience across all devices.

# 📷 Screenshots

<img width="330" alt="Movie Page - 1" src="./images/Movie Page - 1.png">
<img width="330" alt="Movie Page - 2" src="./images/Movie Page - 2.png">
<img width="330" alt="Movie Page - 3" src="./images/Movie Page - 3.png">
<img width="330" alt="Movie Page - 4" src="./images/Movie Page - 4.png">

## 🛠️ Technologies Used

- **Node.js**
  To run the development environment and manage project dependencies via npm or yarn.
- **Express.js:**
  Web framework for building RESTful APIs.
- **MongoDB:**
  NoSQL database for efficient data storage and retrieval.
- **Mongoose:**
  ODM for MongoDB integration.
- **EJS:**
  Templating engine for dynamic HTML rendering.
- **Multer:**
  Middleware for handling file uploads with filtering and storage customization.
- **Bootstrap:**
  Styling and responsive design.

## 👨🏼‍💻 Developer

**Nevil Bharuchwala**
[https://github.com/Apostle1327]

## 📜 License

This project is licensed under the MIT License.
Feel free to fork!
