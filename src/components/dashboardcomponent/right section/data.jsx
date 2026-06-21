import React, { useState } from 'react'
import Datacard from './datacard'
import AddStudent from './addStudent'
import Explore from './explore'
import StudentList from './studentList'

const Data = () => {
    const [students, setStudents] = useState([])

    return (
        <div className='w-3/4 overflow-y-auto'>
            <Datacard data={students} />
            <AddStudent students={students} setStudents={setStudents} />
            <Explore />
            <StudentList data={students} setStudents={setStudents} />
        </div>
    )
}

export default Data