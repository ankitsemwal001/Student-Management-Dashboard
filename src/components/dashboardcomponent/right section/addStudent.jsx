import { useState } from 'react';




const courseMenu = () => {
    return ['Javascript', 'React', 'Nodejs', 'MongoDB', 'Express', 'Django'];
};

const studentGender = () => {
    return ['Male', 'Female', 'Other'];
};

const AddStudent = ({ students, setStudents }) => {
    const courses = courseMenu();
    const gender = studentGender();

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', gender: '', course: '', city: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!formData.name) {
            alert('Name, Email aur Course required');
            return;
        }
        else if (!formData.email) {
            alert('Email required');
            return;
        }

        else if (!formData.course) {
            alert('course required');
            return;
        }

        setStudents([...students, formData]);

        setFormData({ name: '', email: '', phone: '', gender: '', course: '', city: '' });
    };

    return (
        <div>
            <div className="border border-transparent p-4 mt-14 shadow-md rounded-md">
                <h1 className="font-bold text-2xl mb-4">Add New Student</h1>
                <div className="grid grid-cols-3 gap-4">
                    <label className="flex flex-col">
                        Full Name
                        <input type="text" name="name" value={formData.name}
                            onChange={handleChange} className="mt-1 border rounded-md px-3 py-2" />
                    </label>
                    <label className="flex flex-col">
                        Email
                        <input type="email" name="email" value={formData.email}
                            onChange={handleChange} className="mt-1 border rounded-md px-3 py-2" />
                    </label>
                    <label className="flex flex-col">
                        Phone Number
                        <input type="number" name="phone" value={formData.phone}
                            onChange={handleChange} className="mt-1 border rounded-md px-3 py-2" />
                    </label>

                    <label className="flex flex-col">
                        Course
                        <select name="gender" value={formData.gender}
                            onChange={handleChange} className="mt-1 border rounded-md px-3 py-2">
                            <option value="">Gender</option>
                            {gender.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </label>

                    <label className="flex flex-col">
                        Course
                        <select name="course" value={formData.course}
                            onChange={handleChange} className="mt-1 border rounded-md px-3 py-2">
                            <option value="">Select Course</option>
                            {courses.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </label>
                    <label className="flex flex-col">
                        City
                        <input type="text" name="city" value={formData.city}
                            onChange={handleChange} className="mt-1 border rounded-md px-3 py-2" />
                    </label>
                    <button onClick={handleSubmit}
                        className="border border-b-fuchsia-900 rounded-2xl h-full cursor-pointer w-2/4 bg-blue-400">
                        <h1 className="font-semibold text-amber-50">Add Student</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;