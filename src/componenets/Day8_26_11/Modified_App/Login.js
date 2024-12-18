import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate=useNavigate();
    const [user,setUser] = useState({
        username:'',
        password:''
    });
    
    const getUser=(e)=>{
        const { name, value } = e.target;
        setUser((prev) => ({
                ...prev,
                [name]: value
            })
        );
    }
    const authenticate=()=>{
        if (user.username==='admin' && user.password==='admin1234') {
            navigate('/dash')
        } else {
            alert('Incorrect Username or Password');
            navigate('/login')
        }        
    }
    
    return(
        <div>
            <h1>Login Here</h1>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Username</td>
                            <td><input type="text" name="username" value={user.username} onChange={getUser}/></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="password" name="password" value={user.password} onChange={getUser}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <tr>
                                    <td><button 
                                            onClick={authenticate}
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
                                    </td>
                                    <td><button 
                                            onClick={clear}
                                            style={{
                                                padding: '10px 20px',
                                                backgroundColor: '#da1b1b',
                                                color: 'white',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                fontSize: '16px',
                                            }}>
                                            Clear
                                        </button>
                                    </td>
                                </tr>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            
        </div>
    )
}