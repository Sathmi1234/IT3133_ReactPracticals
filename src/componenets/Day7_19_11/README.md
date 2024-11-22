This React project demonstrates **parent-to-child** and **child-to-parent communication** using props and callback functions. It highlights how React's component interaction allows the parent component to update its state based on data passed from the child.

---

## Features

1. **Parent-Child Communication**  
   - The parent component passes a callback function to the child via props.
   - The child component invokes the function to send data back to the parent.

2. **Dynamic State Updates**  
   - The parent dynamically updates its state (`childname`) based on the data received from the child.

3. **Simple and Modular Design**  
   - Clean separation of parent and child logic through reusable components.

---

## Folder Structure

```
src/
├── App.js                      // Parent component managing state and child communication
├── components/
│   └── Day7_19_11/
│       └── ChildCom.js         // Child component sending data to the parent
├── index.js                    // Entry point rendering the App component
└── index.css                   // Styles for the application
```

---

## Component Breakdown

### 1. **App Component** (`App.js`)  
   - Acts as the parent component.  
   - Manages the state variable `childname` to store the message received from the child.  
   - Defines a callback function `recieveName` that updates the `childname` state.  
   - Passes `recieveName` to the child via the `setfun` prop.

### 2. **ChildCom Component** (`ChildCom.js`)  
   - Renders a message indicating it's the child component.  
   - Invokes the `setfun` function passed via props with a hardcoded message (`"My name is Bob!"`).

---

## Workflow

1. **Parent to Child Communication**  
   - The parent passes the `recieveName` function as a prop (`setfun`) to the child component.

2. **Child to Parent Communication**  
   - The child calls the `setfun` function with a string (`"My name is Bob!"`).
   - The parent updates its state (`childname`) with the received string.

3. **Dynamic State Update in Parent**  
   - The parent renders the updated `childname` in its UI.

---

### Output
![1and7](./1and7.png)
![2](./2.png)
![3](./3.png)
![4](./4.png)
![4validation](./4validation.png)
![5](./5.png)
![6and8](./6and8.png)
![9and10before](./9and10before.png)
![9and10](./9and10.png)