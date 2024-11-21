import { Row } from 'react-bootstrap';
import '../../assets/Style.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function StudentList({students, deletee}){
    const getClass = (gpa) => {
        if (gpa >= 3.7) {
            return "first-class";
        }
        if (gpa >= 3.3) {
            return "second-upper";
        }
        if (gpa >= 3.0) {
            return "second-lower";
        }
        return "";
    };

    return(
        <div>
        <h3>Student List</h3>
            {
                students.length === 0 ? (
                    <p>No students have been added yet.</p>
                ) : (
                    <div>
                        <table style={{ border: '1px solid black', borderCollapse: 'collapse' }} >
                                <thead>
                                    <tr>
                                        <th style={{ border: '1px solid black', width: '100px' }}>Reg.no</th>
                                        <th style={{ border: '1px solid black', width: '100px' }}>Name</th>
                                        <th style={{ border: '1px solid black', width: '100px'  }}>Age</th>
                                        <th style={{ border: '1px solid black', width: '100px'  }}>Course</th>
                                        <th style={{ border: '1px solid black', width: '100px'  }}>GPA</th>
                                        <th style={{ border: '1px solid black', width: '100px'  }}>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((s) => (
                                        <tr key={s.regno}>
                                            <td style={{ border: '1px solid black', width: '100px'  }}> {s.regno}</td>
                                            <td style={{ border: '1px solid black', width: '100px'  }}> {s.name}</td>
                                            <td style={{ border: '1px solid black', width: '100px'  }}> {s.age}</td>
                                            <td style={{ border: '1px solid black', width: '100px'  }}> {s.course}</td>
                                            <td style={{ border: '1px solid black', width: '100px'  }} className={getClass(s.gpa)}>{s.gpa}</td>
                                            <td style={{ border: '1px solid black', width: '100px'  }}>
                                                <center>
                                                <Button variant="outline-danger" onClick={() => deletee(s.regno)}>
                                                    Delete
                                                </Button></center>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                        </table>
                        <h7 className='first-class'>First Class</h7><br/>
                        <h7 className='second-upper'>Second Upper</h7><br/>
                        <h7 className='second-lower'>Secont Lower</h7><br/>
                    </div>
            )}
            </div>
    );
}