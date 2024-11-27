import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate=useNavigate();
    const navigateTo=()=>{
        navigate('/login')
    }
    return(
        <div>
            <h1>Welcome!! this is Home Page</h1>
            <button onClick={navigateTo}>Login</button>
        </div>
    )
}