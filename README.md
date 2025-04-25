# 🛒 **BagItNow**

This is a **full-stack e-commerce application** built with **React.js** on the frontend and **Flask** on the backend. It allows users to browse products, view product details in a modal, add products to their cart, scan barcodes using **QuaggaJS**, and register or log in securely. The UI is styled using **Tailwind CSS**, and icons are provided by **React Icons** and **lucide-react**.

---

## 🚀 **Features**

### 🧑‍💻 **User Authentication (Backend)**
✔️ User registration with secure password hashing  
✔️ Login functionality using email and password  
✔️ Passwords stored using `Werkzeug` hashing  
✔️ MongoDB used for storing user data

### 1️⃣ **Product List Page (Frontend)**  
✔️ Displays multiple products with images, names, brands, and prices  
✔️ Responsive for desktop and mobile  
✔️ Each product has an **"Add to Bag"** button

### 2️⃣ **Product Detail View (Modal)**  
✔️ Modal shows image, name, brand, price, description, and reviews  
✔️ Option to **Add to Bag**

### 3️⃣ **Shopping Cart (My Bag)**  
✔️ Side navbar to show added items  
✔️ Quantity updates, total price display, and remove option

### 4️⃣ **Barcode Scanner**  
✔️ Real-time scanning using **QuaggaJS**  
✔️ Scanned items get auto-added to the cart

---

## 🛠 **Tech Stack**

### 🖥 **Frontend**
- React.js  
- Tailwind CSS  
- React Icons & lucide-react  
- QuaggaJS  

### 🗄 **Backend**
- Flask  
- PyMongo  
- MongoDB  
- Werkzeug for password hashing

## 📌 **Setup & Installation**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/yourusername/your-repo.git
cd your-repo
