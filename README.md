# 🚀 Thumbcraftai - Thumbnail Generator

Create stunning, high-converting YouTube thumbnails in seconds using the power of AI.

Thumbcraftai helps content creators, marketers, businesses, and influencers generate professional-quality thumbnails without requiring graphic design skills.

## 🔗 Live Demo

### Frontend
https://thumbcraftai-five.vercel.app

---

## ✨ Features

### 🎨 AI Thumbnail Generation

* Generate unique thumbnails using AI.
* Multiple visual styles available.
* High-quality image generation.
* Support for custom prompts.

### 🖼️ Thumbnail Customization

* Multiple aspect ratios.
* Different color schemes.
* Various thumbnail styles.
* Automatic title overlay.

### 👤 Authentication

* User registration.
* Secure login system.
* Session-based authentication.
* Protected routes.

### ☁️ Cloud Storage

* Cloudinary integration.
* Secure image hosting.
* Fast image delivery.

### 📚 Thumbnail History

* View previously generated thumbnails.
* Access generated images anytime.
* Thumbnail management dashboard.

### 📱 Responsive Design

* Mobile friendly.
* Tablet support.
* Desktop optimized UI.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* TypeScript
* Tailwind CSS
* React Router DOM
* Axios
* React Hot Toast
* Lucide React
* Motion

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB Atlas
* Mongoose

### AI & Media

* Google Gemini / Imagen API
* Sharp
* Cloudinary

### Authentication

* Express Session
* Cookies

---

## 📂 Project Structure

```bash
Thumblify/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── context/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── configs/
│   └── utils/
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

SESSION_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

CLIENT_URL=http://localhost:5173
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/AkhtarShaikh-7/THUMBCRAFTAI

cd Thumbcraftai
```

---

### Install Frontend Dependencies

```bash
cd client

npm install
```

---

### Install Backend Dependencies

```bash
cd backend

npm install
```

---

## ▶️ Run Application

### Backend

```bash
cd backend

npm run dev
```

---

### Frontend

```bash
cd client

npm run dev
```

---

## 🌐 API Endpoints

### Authentication

```http
POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout
```

### Thumbnail

```http
POST /api/thumbnail/generate

DELETE /api/thumbnail/:id
```

### User

```http
GET /api/user/thumbnails

GET /api/user/thumbnail/:id
```
## 🎯 Future Improvements

* AI Prompt Enhancement
* Thumbnail Variations
* AI Face Detection
* Thumbnail Templates
* Team Collaboration
* Subscription Plans
* Download in Multiple Sizes
* SEO-Based Thumbnail Suggestions

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes

```bash
git commit -m "Added New Feature"
```

4. Push to branch

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request

## 👨‍💻 Author

Akhtar Shaikh

Passionate Full Stack Developer focused on building modern AI-powered web applications using the MERN Stack.
