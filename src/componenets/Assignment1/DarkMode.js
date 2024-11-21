import { useState } from "react";
import { Form } from "react-bootstrap";
export default function DarkMode({isDark}){
    const [darkMode,setDarkMode]=useState(false)
    return(
        <Form>
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Dark Mode"
                onClick={()=>{isDark(!darkMode);setDarkMode(!darkMode)}} 
                onChange={()=>setDarkMode(!darkMode)}
            />
        </Form>
    );
}