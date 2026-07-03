# 📝 Notes Backend API

A RESTful Notes Backend API built using **Node.js**, **Express.js**, and **MongoDB**. This project performs complete CRUD (Create, Read, Update, Delete) operations for managing notes and was tested using **Postman**.

---

## 🚀 Features

- ➕ Create a new note
- 📖 Get all notes
- 🔍 Get a note by ID
- ✏️ Update an existing note
- ❌ Delete a note
- 💾 MongoDB database integration
- 📬 API testing with Postman

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Postman**



## 📁 Project Structure

```
project-folder/
│── models/
│   └── Note.js
│── routes/
│   └── noteRoutes.js
│── index.js
│── package.json
│── .gitignore
```

---

## ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/gigglyvibes/MONGO-CRUD-OPERATIONS.git
```

2. Navigate to the project directory

```bash
cd MONGO-CRUD-OPERATIONS
```

3. Install dependencies

```bash
npm install
```

4. Configure MongoDB

Update your MongoDB connection string in the project.

5. Start the server

```bash
node index.js
```

or

```bash
nodemon index.js
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/notes` | Create a new note |
| GET | `/notes` | Get all notes |
| GET | `/notes/:id` | Get a note by ID |
| PUT | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Delete a note |

---

## 🧪 API Testing

All API endpoints were tested successfully using **Postman**.

---

## 📷 Sample JSON

```json
{
    "title": "MongoDB Notes",
    "content": "Learning CRUD operations using Express and MongoDB."
}
```

---

## 📚 What I Learned

- Building REST APIs with Express.js
- MongoDB CRUD Operations
- Mongoose Schema & Models
- Express Routing
- Connecting Node.js with MongoDB Atlas
- API Testing using Postman
- Error Handling in REST APIs

---

## 👨‍💻 Author

**Manoj Telagadi**

GitHub: https://github.com/gigglyvibes

---

⭐ If you found this project helpful, don't forget to give it a star!
