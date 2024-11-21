export default function StudentSummary({students}){
    return(
        <div>
            <h4>Summary</h4>
            <p>Total Students: {students.length}</p>
            <p>
                Average Age:{" "}
                {students.length > 0
                    ? (
                        students.reduce((sum, s) => sum + Number(s.age), 0) /
                        students.length
                    ).toFixed(2)
                    : 0}
            </p>
            <p>
                Average GPA:{" "}
                {students.length > 0
                    ? (
                        students.reduce((sum, s) => sum + Number(s.gpa), 0) /
                        students.length
                    ).toFixed(2)
                    : 0}
            </p>
        </div>
    );
}