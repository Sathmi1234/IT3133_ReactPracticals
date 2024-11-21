import { useState } from "react";
import StudentList from "./StudentList";
import StudentSummary from "./StudentSummary";
import Button from 'react-bootstrap/Button';
import '../../assets/Style.css'

export default function StudentInfo() {
    const [student, setStudent] = useState({
        regno: "",
        name: "",
        age: "",
        course: "",
        gpa: ""
    });
    const [students, setStudents] = useState([]);
    const [error, setError] = useState("");

    const getStudent = (e) => {
        const { name, value } = e.target;
        setStudent((prevStu) => ({
            ...prevStu,
            [name]: value
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        const { regno, name, age, course, gpa } = student;

        if (!regno || !name) {
            setError("Fill Reg.No. and Name");
            return;
        }
        if (students.some((s) => s.regno === regno)) {
            setError("Reg.No. Already Exists");
            return;
        }

        setError("");
        setStudents([...students, student]);
        setStudent({
            regno: "",
            name: "",
            age: "",
            course: "",
            gpa: ""
        });
    };

    const deletee = (regno) => {
        setStudents(students.filter((s) => s.regno !== regno));
    };

    return (
        <div>
            <center>
            <br/>
                <form onSubmit={submit}>
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
                                <td>Age:</td>
                                <td>
                                    <input
                                        type="number"
                                        name="age"
                                        value={student.age}
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
                                        <Button variant="outline-primary" type="submit">Submit</Button>
                                    </center>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
            
            
            <StudentList students={students} deletee={deletee}/>
            <StudentSummary students={students}/>
            </center>
        </div>
    );
}
