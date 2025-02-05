

# 🎮 Chill Gamer  

**Chill Gamer** is a user-friendly game review platform where users can explore, share, and manage game reviews effortlessly. This repository contains the **client-side** code for the application.  

🔗 **Live URL:** [Chill Gamer](https://chill-gamer-40.netlify.app/)  

---

## 🚀 Key Features  

✅ **User Authentication**  
- Secure **registration, login, and authentication** using **Firebase**.  

📝 **Game Reviews**  
- Users can view **all reviews** shared by others.  
- Each user can **add new game reviews** with their own ratings and opinions.  
- Users can **edit or delete their own reviews**, ensuring full control over their contributions.  
- Reviews are securely stored in a **MongoDB database**.  

🔒 **Access Control**  
- Users **cannot access, edit, or delete reviews added by others**, maintaining data privacy and security.  

🎨 **Engaging UI**  
- Modern and interactive interface with **React**, **React Icons**, and **SweetAlert2** for a smooth user experience.  

---

## 🛠 Installation  

Follow these steps to set up **Chill Gamer** locally:  

1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/your-username/chill-gamer.git
cd chill-gamer


2️⃣ **Install Dependencies**  
```sh
npm install
```  

3️⃣ **Set Up Environment Variables**  
Create a `.env` file in the root directory and configure it with your **Firebase** and **MongoDB** credentials:  
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
```  

4️⃣ **Run the Application**  
```sh
npm start
```  

---

## 📦 Dependencies  

Chill Gamer is built using the following **NPM packages**:  

### 🔥 **Authentication & Storage**  
- `firebase` (`^11.0.2`) - Firebase authentication.  
- `localforage` (`^1.10.0`) - Local storage management.  

### ⚡ **UI & Interactivity**  
- `react` (`^18.3.1`) / `react-dom` (`^18.3.1`) - Core React library.  
- `react-icons` (`^5.4.0`) - Icons for UI enhancement.  
- `sweetalert2` (`^11.14.5`) - Custom alert popups.  
- `react-tooltip` (`^5.28.0`) - Tooltips for better UX.  
- `react-multi-carousel` (`^2.8.5`) - Carousel for displaying game reviews.  

### ⭐ **User Experience Enhancements**  
- `react-simple-typewriter` (`^5.0.1`) - Typing animation effects.  
- `react-star-ratings` (`^2.3.0`) - Star rating system for reviews.  

### 🔎 **Sorting & Filtering**  
- `match-sorter` (`^8.0.0`) - Intelligent search and sorting.  
- `sort-by` (`^1.2.0`) - Sorting utility.  

### 🌍 **SEO & Helmet**  
- `react-helmet` (`^6.1.0`) - Manage metadata for better SEO.  

### 🚀 **Routing & Navigation**  
- `react-router-dom` (`^7.0.2`) - Handle navigation and routing.  

---

## 🤝 Contributing  

Contributions are welcome! To contribute:  

1️⃣ Fork the repository.  
2️⃣ Create a new branch (`feature-branch`).  
3️⃣ Commit your changes.  
4️⃣ Push to the branch and create a **Pull Request**.  








