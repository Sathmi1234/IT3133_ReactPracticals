# Day 8

# React Multi-Page Application

This React project demonstrates a **multi-page application** using **React Router** to handle navigation between different pages and user authentication. It includes two exercises: a basic navigation setup and a login-authentication system with conditional routing.

---

## Features

### Exercise 1: Page Navigation

1. **Static Pages**
   - Pages: `Home`, `About Us`, and `Contact Us`.
   - Each page is a separate component rendered via React Router.

2. **Navigation**
   - Uses `<Link>` and `<NavLink>` for navigating between pages.
   - Implements basic navigation styling and active state.

### Exercise 2: Login and Dashboard

1. **User Authentication**
   - A `Login` page with form inputs for username and password.
   - Validates user credentials against hardcoded values (`admin/admin1234`).

2. **Conditional Routing**
   - Upon successful login, navigates to a `Dashboard` page.
   - Displays an error alert for invalid credentials.

3. **Dynamic State Handling**
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
│   │       ├── Login.js           
│   │       ├── Dashboard.js       
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

## Workflow

### **Exercise 1: Page Navigation**
1. The user navigates between `Home`, `About Us`, and `Contact Us` pages via links.
2. The content updates dynamically based on the current route.

### **Exercise 2: Login and Dashboard**
1. The user enters login credentials on the `Login` page.
2. Valid credentials navigate to the `Dashboard`.
3. Invalid credentials display an error message.

---

## Output 

https://github.com/user-attachments/assets/b1f1be21-1c39-415b-8fc3-9ce80a414774

https://github.com/user-attachments/assets/0c2fbab9-d8f1-444d-a51f-ae8395aece4d

https://github.com/user-attachments/assets/63934652-7fe9-4048-8009-9a955e15f63d

https://github.com/user-attachments/assets/cdf3f0f6-24bd-48f4-a4a8-ff2cca09ef92