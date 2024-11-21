import { useState } from "react";

export default function Calculator(){
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    return(
<>
        <table>
            <tr>
                <td align="right">Number:</td>
                <td align="left">
                    <input type="number" value={num1}
                    onChange={(e)=>{setNum1(parseFloat(e.target.value))}}/>
                </td>
            </tr>
            <tr>
                <td align="right">Number:</td>
                <td align="left">
                    <input type="number" value={num2}
                    onChange={(e)=>{setNum2(parseFloat(e.target.value))}}/>
                </td>
            </tr>
            <tr>
                <td align="right">Sum:</td>
                <td>{(num1+num2)}</td>
            </tr>
            <tr>
                <td align="right">Subtraction:</td>
                <td>{num1-num2}</td>
            </tr>
            <tr>
                <td align="right">Multiplication:</td>
                <td>{num1*num2}</td>
            </tr>
            <tr>
                <td align="right">Division:</td>
                <td>{num1/num2}</td>
            </tr>
        </table>
</>

    );
}