import React from 'react'

const StudentList = ({ data = [] }) => {
    return (
        <div className='border border-transparent bg-amber-20 mt-10 mb-5'>
            <h1 className='text-2xl font-semibold mt-4 ml-4'>All Students</h1>
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
                                <div className='gap-8'>
                                    <button className="bg-blue-500 text-white px-2 py-1  rounded">Edit</button>
                                    <button className="bg-amber-500 text-white px-2 py-1 rounded m-2">Delete</button>
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