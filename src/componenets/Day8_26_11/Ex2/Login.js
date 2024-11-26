import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate=useNavigate();
    const authenticate=()=>{
        navigate('/dash')
    }
    return(
        <div>
            <h1>Login Here</h1>
            <button onClick={authenticate}>Login</button>
        </div>
    )
}