import { useState } from 'react';
import StudentList from './StudentList';

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

    const [students, setStudents] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        city: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.course) return;

        setStudents([...students, formData]);

        setFormData({
            name: '',
            email: '',
            phone: '',
            course: '',
            city: ''
        });
    };

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
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 border rounded-md px-3 py-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 border rounded-md px-3 py-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        Phone Number
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 border rounded-md px-3 py-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        Course
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
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
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="mt-1 border rounded-md px-3 py-2"
                        />
                    </label>

                    <button
                        onClick={handleSubmit}
                        className="border border-b-fuchsia-900 rounded-2xl h-full w-2/4 bg-blue-400"
                    >
                        <h1 className="font-semibold text-amber-50">
                            Add Student
                        </h1>
                    </button>

                </div>
            </div>

            {/* StudentList ko students array pass kar rahe hain */}
            <StudentList data={students} />
        </div>
    );
};

export default AddStudent;