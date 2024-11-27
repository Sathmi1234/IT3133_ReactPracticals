# Day 8 ( 2024/11/26 )
This React project demonstrates a **multi-page application** using **React Router** to handle navigation between different pages and user authentication. It includes two exercises: a basic navigation setup and a login-authentication system with conditional routing.

---

## Features

1. **Static Pages**
   - Pages: `Home`, `About Us`, and `Contact Us`.
   - Each page is a separate component rendered via React Router.

2. **Navigation**
   - Uses `<Link>` and `<NavLink>` for navigating between pages.
   - Implements basic navigation styling and active state.


3. **User Authentication**
   - A `Login` page with form inputs for username and password.
   - Validates user credentials against hardcoded values (`admin/admin1234`).

4. **Conditional Routing**
   - Upon successful login, navigates to a `Dashboard` page.
   - Displays an error alert for invalid credentials.

5. **Dynamic State Handling**
   - Manages user input with React's `useState` hook.
   - Updates the state as the user interacts with the form.

---

## Folder Structure

```
src/
├── components/
│   ├── Day8_26_11/
│   │   ├── Ex1/                   
│   │   │   ├── Home.js            
│   │   │   ├── AboutUs.js         
│   │   │   ├── ContactUs.js       
│   │   ├── Ex2/                   
│   │   |   ├── Login.js           
│   │   |   ├── Dashboard.js  
│   │   ├── Modified_App/                
│   │   │   ├── Home.js            
│   │   │   ├── AboutUs.js         
│   │   │   ├── ContactUs.js       
│   │   │   ├── Dashboard.js       
│   │   │   ├── Login.js           
│   │   │   ├── NavBar.js 
│   │   │── ExerciseApp.js
├── App.js                         
├── index.js                       
└── index.css                      
```

---

## Component Breakdown

### **Exercise 1**

#### 1. **Home Component** (`Home.js`)  
   - Displays a message: "Welcome!! this is Home Page."

#### 2. **AboutUs Component** (`AboutUs.js`)  
   - Displays a message: "Welcome!! this is About Us Page."

#### 3. **ContactUs Component** (`ContactUs.js`)  
   - Displays a message: "Welcome!! this is Contact Us Page."

#### Router Setup
- The `Router`, `Routes`, and `Route` elements are used to render these pages dynamically based on the URL.

---

### **Exercise 2**

#### 1. **Login Component** (`Login.js`)  
   - Provides a form for the user to enter their `username` and `password`.
   - Validates input credentials:
     - `Username: admin`
     - `Password: admin1234`
   - Navigates to the `Dashboard` on success, or displays an alert for invalid credentials.

#### 2. **Dashboard Component** (`Dashboard.js`)  
   - Displays a message: "Welcome to Dashboard."

#### Router Setup
- The `Router` ensures the `Dashboard` is only accessible after successful authentication.

---
### **Modified App**

#### Modifed app is a simple application build from the main concepts learned from Exercise 1 and Exercise 2

---

## Workflow

### **Exercise 1: Page Navigation**
1. The user navigates between `Home`, `About Us`, and `Contact Us` pages via links.
2. The content updates dynamically based on the current route.

### **Exercise 2: Login and Dashboard**
1. The user enters login credentials on the `Login` page.
2. Valid credentials navigate to the `Dashboard`.
3. Invalid credentials display an error message.

### **Modified App**
1. Users visit the `Home` page and can navigate to `About Us`, `Contact Us`, or `Login`.
2. On the `Home` page, users can click a `Login` button to navigate to the `Login` page.
3. Users enter their username and password on the `Login` page.
4. If credentials are correct, users are redirected to the `Dashboard`.
5. If credentials are incorrect, an error message is displayed, and users remain on the `Login` page.

---

## Output 

https://github.com/user-attachments/assets/26cac8ca-c321-429b-9de3-6cc3db73a531
