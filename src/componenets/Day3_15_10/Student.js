export default function Student({regno,name,age,degree}) {
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Reg No:</td>
                        <td>{regno}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Age:</td>
                        <td>{age}</td>
                    </tr>
                    <tr>
                        <td>Degree:</td>
                        <td>{degree}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}