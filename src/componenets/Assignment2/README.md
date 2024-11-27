# Assignment 2
This React project implements a **Student Management System**, showcasing both form handling and dynamic list management. The application allows users to add, display, and delete student details while providing summary statistics.

---

## Features

1. **Add New Students**
   - Users can fill out a form to add new students.
   - Form fields include Registration Number, Name, Age, Course, and GPA.
   - Validates for required fields (`Reg.No.` and `Name`) and checks for duplicate `Reg.No.`.

2. **Student List**
   - Displays all students in a tabular format.
   - Highlights GPA categories using different styles:
     - First Class (GPA ≥ 3.7)
     - Second Upper (GPA ≥ 3.3)
     - Second Lower (GPA ≥ 3.0)
   - Includes a delete button for each student to remove them from the list.

3. **Summary**
   - Displays:
     - Total number of students.
     - Average age of students.
     - Average GPA of students.

4. **Interactive Features**
   - Dynamic state updates using React's `useState`.
   - Style classes to highlight GPA ranges.

---

## Folder Structure

```
src/
├── App.js                     // Entry point, includes the main `StudentInfo` component
├── components/
│   └── Assignment2/
│       ├── StudentInfo.js     // Main component managing state and interactions
│       ├── StudentList.js     // Displays a table of students with delete functionality
│       └── StudentSummary.js  // Shows statistics for the students
├── assets/
│   └── Style.css              // Custom styles for the application
└── index.js                   // Renders the App component
```

---

## Component Breakdown

### 1. **App Component**
- Serves as the main entry point for the app.
- Integrates the `StudentInfo` component.

### 2. **StudentInfo Component**
- Manages the state for individual student (`student`) and the list of students (`students`).
- Provides input fields for student details and handles form submission.
- Validates input and handles errors.

### 3. **StudentList Component**
- Displays a list of students in a table format.
- Highlights rows based on GPA category using CSS classes.
- Provides a delete button for each student to remove them from the list.

### 4. **StudentSummary Component**
- Calculates and displays statistics:
  - Total number of students.
  - Average age.
  - Average GPA.

---

### Output
