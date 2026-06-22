import { useState, useEffect } from "react";

const courseMenu = () => {
    return ["Javascript", "React", "Nodejs", "MongoDB", "Express", "Django"];
};

const studentGender = () => {
    return ["Male", "Female", "Other"];
};

const AddStudent = ({ students, setStudents, editStudent, onSave }) => {
    const courses = courseMenu();
    const gender = studentGender();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        course: "",
        city: "",
    });

    // Edit button click hone par form fill hoga
    useEffect(() => {
        if (editStudent) {
            setFormData(editStudent);
        }
    }, [editStudent]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if (!formData.name) {
            alert("Name required");
            return;
        }

        if (!formData.email) {
            alert("Email required");
            return;
        }

        if (!formData.course) {
            alert("Course required");
            return;
        }

        // Edit Mode
        if (editStudent) {
            onSave(formData);
        } else {
            setStudents([...students, formData]);
        }

        setFormData({
            name: "",
            email: "",
            phone: "",
            gender: "",
            course: "",
            city: "",
        });
    };

    return (
        <div>
            <div className="border border-transparent p-4 mt-14 shadow-md rounded-md">
                <h1 className="font-bold text-2xl mb-4">
                    {editStudent ? "✏️ Edit Student" : "Add New Student"}
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
                        Gender
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="mt-1 border rounded-md px-3 py-2"
                        >
                            <option value="">Select Gender</option>
                            {gender.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
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
                        className="border rounded-2xl h-full cursor-pointer w-2/4 bg-blue-500"
                    >
                        <h1 className="font-semibold text-white">
                            {editStudent ? "Save Update" : "Add Student"}
                        </h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;