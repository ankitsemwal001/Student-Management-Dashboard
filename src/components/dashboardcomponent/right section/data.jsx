import { useState } from 'react';
import Datacard from './datacard';
import AddStudent from './addStudent';
import Explore from './explore';
import StudentList from './studentList';

const Data = () => {
    const [students, setStudents] = useState([]);
    const [editStudent, setEditStudent] = useState(null);
    const [editIndex, setEditIndex] = useState(null);
    const [search, setSearch] = useState("");

    const handleEdit = (student, index) => {
        setEditStudent(student);
        setEditIndex(index);
    };

    const handleSave = (updatedStudent) => {
        const updated = [...students];
        updated[editIndex] = updatedStudent;

        setStudents(updated);
        setEditStudent(null);
        setEditIndex(null);
    };

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-3/4 overflow-y-auto">
            <Datacard data={students} />

            <AddStudent
                students={students}
                setStudents={setStudents}
                editStudent={editStudent}
                onSave={handleSave}
            />

            <Explore
                search={search}
                setSearch={setSearch}
            />

            <StudentList
                data={filteredStudents}
                setStudents={setStudents}
                setEditStudent={handleEdit}
            />
        </div>
    );
};

export default Data;