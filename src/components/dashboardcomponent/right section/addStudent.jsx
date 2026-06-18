import React from 'react'

const AddStudent = () => {
    return (
        <div>


            <div className='border p-4 mt-14 border-transparent shadow-md'>
                <h1 className='font-bold text-2xl '>Add New Student</h1>

                <div className="grid grid-cols-3 gap-4 col-end-3">
                    <label className="flex flex-col text-xl font-normal">
                        Full Name
                        <input
                            type="text"
                            className="mt-1 border rounded-md px-3 py-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        Email
                        <input
                            htmlFor='email'
                            type="email"
                            className="mt-1 border rounded-md px-3 py-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        Phone Number
                        <input
                            htmlFor='number'
                            type="number"
                            className="mt-1 border rounded-md px-3 py-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        Course
                        <input
                            type="text"
                            className="mt-1 border rounded-md px-3 py-2"
                        />
                    </label>

                    <label className="flex flex-col">
                        City
                        <input
                            type="text"
                            className="mt-1 border rounded-md px-3 py-2"
                        />
                    </label>
                </div>

            </div>
        </div>
    )
}

export default AddStudent
