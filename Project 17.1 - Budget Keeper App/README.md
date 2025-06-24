# 📌 Budget Keeper & Expense Tracker

An interactive web application for managing personal budgets and daily expenses, using MongoDB as the database. The app enables users to add, update, and delete budgets and expenses with a clean, responsive UI built on Bootstrap.

## 🚀 Features

- **Budget Management:**
  Create, update, and delete multiple budgets dynamically.

- **Expense Tracking:**
  Add expenses tied to specific budgets, with validation to prevent overspending.

- **Dynamic Data Display:**
  View detailed expenses grouped by budgets, updated in real-time.

## 📂 Project Folder Structure

```jsx
├── database/                // Database configuration and initialization
│   └── budgetKeeper-Database.js
├── images/                  // Image assets
├── models/                  // Data models for the application
│   ├── budgetKeeper-Model.js
│   └── dailyExpenses-Model.js
├── node_modules/            // Project dependencies (auto-generated)
├── views/                   // View templates
│   └── index.ejs
├── .gitignore               // Files and directories to be ignored by Git
├── App.js                   // Main application entry point
├── package-lock.json        // Dependency tree lock file
├── package.json             // Project metadata and dependencies
└── README.md                // Project documentation
```

## 🏗️ How to Use

1. **Clone the Repository:**

```bash
https://github.com/Apostle1327/My-Node-Journey/tree/master/Project%2017.1%20-%20Budget%20Keeper%20App
```

2. **Navigate to the Project Directory:**

```bash
cd Project 17.1 - Budget Keeper App
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

1. **Open in Browser:**
   Navigate to Localhost url in your web browser to view the application.

## 👨🏼‍💻 Usage

- **Manage Budgets:**
  Add new budgets, update existing budgets with additional funds, or delete budgets.

- **Track Expenses:**
  Add expenses against budgets. Expenses automatically reduce the available budget balance.

- **Detailed Expense View:**
  See expenses grouped by budget with options to delete individual expense entries.

- **Responsive Experience:**
  Enjoy a seamless experience across all devices.

# 📷 Screenshots

<img width="330" alt="Budget Keeper App - 1" src="./images/Project 17.1 - Budget Keeper App - 1.png">
<img width="330" alt="Budget Keeper App - 2" src="./images/Project 17.1 - Budget Keeper App - 2.png">
<img width="330" alt="Budget Keeper App - 3" src="./images/Project 17.1 - Budget Keeper App - 3.png">
<img width="330" alt="Budget Keeper App - 4" src="./images/Project 17.1 - Budget Keeper App - 4.png">
<img width="330" alt="Budget Keeper App - 5" src="./images/Project 17.1 - Budget Keeper App - 5.png">
<img width="330" alt="Budget Keeper App - 6" src="./images/Project 17.1 - Budget Keeper App - 6.png">

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
- **Bootstrap:**
  Styling and responsive design.

## 📜 License

This project is licensed under the MIT License.
Feel free to fork, modify, and distribute!
