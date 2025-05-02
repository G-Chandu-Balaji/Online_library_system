# 📚 Online Library System Web App

This is a simple book library application built with **React**, **React Router**, and **Redux**. It allows users to browse books by category, view detailed information about each book, add new books, and handle 404 pages.

## 🚀 Features

- 🏠 Home page with welcome message with animation, navigation bar, categories, and popular books
- 🔍 Browse books by category with dynamic routing and search functionality
- 📖 View detailed information about selected books with dynamic routing
- ➕ Add new books with Redux state management and form validation
- ❌ Custom 404 Page for undefined routes and alsp for child routes

---

## 📦 Tech Stack

- React
- React Router
- Redux (with Redux Toolkit)
- Tailwind CSS
- React-icons
- React-hook-form

---

## 🛠️ Getting Started

### 1. Clone the Repository

git clone https://github.com/G-Chandu-Balaji/Online_library_system.git
cd Online_library_system

### 2. Install Dependencies

npm install

### 3.Run the Development Server

    npm run dev

```

## 🧪 Project Structure

src/
├── components/        # Reusable UI components
├── pages/             # Page components (Home, Browser_Page, Book_category, Book_Details, Add_Book, Error)
├── utils/             # Redux store, slices and dummydata
├── App.jsx            # App layout
├── main.jsx           # Routing
└── index.js           # App entry point


---

## 📝 Usage Instructions

 -Home Page: Shows categories and popular books

 -Browse_Page: Filter books by category or search by title/author

 -Book_Details Page: View detailed info about a selected book

 -Add_Book Page: Submit a new book with form validation

 -Book_category: View list books related to smae categories

 -Erorr Page: Handles undefined routes with a back-to-home link

---

```
