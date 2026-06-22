import Swal from "sweetalert2";

const StudentList = ({ data, setStudents, setEditStudent }) => {

    const handleDelete = (index) => {
        Swal.fire({
            title: "Delete Student?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
        }).then((result) => {

            if (result.isConfirmed) {

                setStudents(data.filter((_, i) => i !== index));

                Swal.fire({
                    title: "Deleted!",
                    text: "Student has been deleted.",
                    icon: "success"
                });
            }

        });
    };

    return (
        <div className='border border-transparent mt-10 mb-5'>
            <h1 className='text-2xl font-semibold mt-4 ml-4'>
                All Students
            </h1>

            <table className="w-full border border-collapse mt-10">
                <thead>
                    <tr>
                        <th className="border p-2">#</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Phone</th>
                        <th className="border p-2">Gender</th>
                        <th className="border p-2">Course</th>
                        <th className="border p-2">City</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((student, index) => (
                        <tr key={index}>
                            <td className="border p-2">{index + 1}</td>
                            <td className="border p-2">{student.name}</td>
                            <td className="border p-2">{student.email}</td>
                            <td className="border p-2">{student.phone}</td>
                            <td className="border p-2">{student.gender}</td>
                            <td className="border p-2">{student.course}</td>
                            <td className="border p-2">{student.city}</td>

                            <td className="border p-2">
                                <div className="flex gap-2">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded"
                                        onClick={() =>
                                            setEditStudent(student, index)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="bg-amber-500 text-white px-2 py-1 rounded cursor-pointer"
                                        onClick={() => handleDelete(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;