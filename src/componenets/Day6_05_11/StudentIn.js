import { useState } from "react";

export default function StudentIn() {
    const [student, setStudent] = useState({
        regno: "",
        name: "",
        course: "",
        gpa: ""
    });
    const [students, setStudents] = useState([]);

    const getStudent = (e) => {
        const { name, value } = e.target;
        setStudent((prevStu) => ({
            ...prevStu,
            [name]: value
        }));
    };
    const addStudents = (e) => {
        setStudents((prevStu) => [
            ...prevStu,
            student
        ]);
    };
    

    return (
        <div>
            <br/>
            <table>
                <tbody>
                    <tr>
                        <td>Reg.no:</td>
                        <td>
                            <input
                                type="text"
                                name="regno"
                                value={student.regno}
                                onChange={getStudent}
                                />
                            </td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="name"
                                        value={student.name}
                                        onChange={getStudent}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Course:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="course"
                                        value={student.course}
                                        onChange={getStudent}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>GPA:</td>
                                <td>
                                    <input
                                        type="text"
                                        name="gpa"
                                        value={student.gpa}
                                        onChange={getStudent}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <center>
                                        <button onClick={addStudents}>Add</button>
                                    </center>
                                </td>
                            </tr>
                        </tbody>
            </table>
            {students.map((s) => (
                <ul>
                    <li > {s.regno}</li>
                    <li > {s.name}</li><hr/>
                </ul>
            ))}
        </div>
    );
}
