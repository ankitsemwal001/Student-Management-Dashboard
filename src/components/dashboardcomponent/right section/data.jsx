import React from 'react'
import Datacard from './datacard'
import AddStudent from './addStudent'
import Explore from './explore'
import StudentList from './studentList'

const Data = () => {
    return (
        <div className=' w-3/4 '>
            <Datacard />
            <AddStudent />
            <Explore />
            <StudentList />
        </div>
    )
}

export default Data
