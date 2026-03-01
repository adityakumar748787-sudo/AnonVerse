# 🌌 AnonVerse

AnonVerse is a full-stack campus discussion platform where users can register, log in, create posts, upvote content, and manage their own posts.

Built using Node.js, Express, MongoDB, and EJS following MVC architecture.

---

## 🚀 Features

- 🔐 User Authentication (Register / Login / Logout)
- 📝 Create Posts
- 👤 Display Post Author
- 🔥 Upvote System (One Vote Per User)
- 🗑 Delete Post (Only Post Owner)
- 📊 Trending Algorithm (Vote + Time Based)
- 🌙 Dark Mode Toggle
- 👤 Profile Page (View Your Posts)
- 🎨 Professional UI Design
- 🏗 MVC Architecture

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Templating Engine:** EJS
- **Authentication:** express-session + bcrypt
- **Styling:** Custom CSS
- **Architecture:** MVC Pattern

---

## 📂 Project Structure
ANONVERSE/
│
├── controllers/
│ └── postController.js
│
├── middleware/
│ └── isLoggedIn.js
│
├── models/
│ ├── User.js
│ └── Post.js
│
├── routes/
│ ├── authRoutes.js
│ └── postRoutes.js
│
├── views/
│ ├── home.ejs
│ ├── login.ejs
│ ├── register.ejs
│ ├── create.ejs
│ └── profile.ejs
│
├── public/
│ └── style.css
│
├── app.js
└── package.json
