import React from 'react'

const StudentList = ({ data }) => {
    return (
        <div>
            <h1>All Students</h1>

            <table className="w-full border border-collapse mt-10">
                <thead>
                    <tr>
                        <th className="border p-2">#</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Phone</th>
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
                            <td className="border p-2">{student.course}</td>
                            <td className="border p-2">{student.city}</td>
                            <td className="border p-2">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
