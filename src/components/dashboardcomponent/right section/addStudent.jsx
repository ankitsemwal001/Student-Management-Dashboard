import React, { useState } from 'react';

const courseMenu = () => {
    return [
        'Javascript',
        'React',
        'Nodejs',
        'MongoDB',
        'Express',
        'Django'
    ];
};

const AddStudent = () => {
    const courses = courseMenu();
    const [course, setCourse] = useState('');

    return (
        <div>
            <div className="border border-transparent p-4 mt-14 shadow-md rounded-md">
                <h1 className="font-bold text-2xl mb-4">
                    Add New Student
                </h1>

                <div className="grid grid-cols-3 gap-4">
                    <label className="flex flex-col">
                        Full Name
                        <input
                            type="text"
                            className="mt-1 border rounded-md px-3 py-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        Email
                        <input
                            type="email"
                            className="mt-1 border rounded-md px-3 py-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        Phone Number
                        <input
                            type="number"
                            className="mt-1 border rounded-md px-3 py-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        Course
                        <select
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            className="mt-1 border rounded-md px-3 py-2"
                        >
                            <option value="">Select Course</option>

                            {courses.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="flex flex-col">
                        City
                        <input
                            type="text"
                            className="mt-1 border rounded-md px-3 py-2"
                        />
                    </label>

                    <button className=' border border-b-fuchsia-900 rounded-2xl h-full w-2/4 bg-blue-400'>
                        <h1 className='font-semibold text-amber-50'>
                            Add  Student
                        </h1>
                    </button>
                </div>


            </div>
        </div>
    );
};

export default AddStudent;