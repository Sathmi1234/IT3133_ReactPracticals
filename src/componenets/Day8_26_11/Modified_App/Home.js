import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate=useNavigate();
    const navigateTo=()=>{
        navigate('/login')
    }
    return(
        <div>
            <h1>Welcome!! this is Home Page</h1>
            <button 
                onClick={navigateTo} 
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}>
                Login
            </button>

        </div>
    )
}