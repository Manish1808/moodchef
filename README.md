# 🍽️ **MoodChef - Personalized Mood-Based Meal Recommender**
MoodChef is a full-stack web application that recommends meals to users based on their current mood. By combining user emotion inputs with intelligent recipe mapping, MoodChef creates a personalized and engaging food discovery experience.

Built using the MERN Stack — MongoDB, Express.js, React.js, and Node.js — the app integrates emotion detection, user authentication, and responsive design for a seamless user journey.

## 🌟 **Features**
Mood Detection via emojis or text sentiment input

- 🍱 Personalized Meal Recommendations tailored to emotional states

- 👤 User Authentication & Profiles

- 🧠 Gemini API integration

- 🥦 Dietary Filters (vegan, gluten-free, etc.)

## 🧠 Motivation
In today’s fast-paced world, emotional eating is common, often leading to unhealthy choices. MoodChef aims to offer emotion-aware meal planning, promoting both physical and mental well-being through mindful eating.

## 🛠️ Tech Stack

| Layer     | Technology                        |
| --------- | --------------------------------- |
| Frontend  | React.js, HTML, CSS, JavaScript   |
| Backend   | Node.js, Express.js               |
| Database  | MongoDB                           |
| APIs Used | Gemini API                        |
| Tools     | Postman, MongoDB Compass, VS Code |

## 🗂️ Project Structure

MoodChef/

  ├── client/        # React frontend (Vite)

  ├── server/        # Node.js backend with Express

  │        └── src/

  │           ├── controllers/

  │           ├── db/

  │           ├── models/

  │           ├── routes/

  │           ├── utils/

  │           ├── app.js

  │           └── index.js

  ├── .env

  ├── README.md

## 💡 Features
- Mood input via emoji or text

- Personalized recipe suggestions

- Filter by diet (vegan, gluten-free, etc.)

- User login and profile management

## 🚀 How to Run

  ### 1. Clone the repo

        git clone https://github.com/Manish1808/moodchef

  ### 2. Install dependencies

        cd client
        npm install
        cd ../server
        npm install
       
  ### 3. Start both frontend and backend

        # In client/
        npm run dev

        # In server/
        node server.js

## 👩‍💻 Authors
- Pandiri Sai Manish
