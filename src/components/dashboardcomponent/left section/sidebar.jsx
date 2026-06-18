import React from 'react'
import { House } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className='w-1/5 bg-amber-100'>
            <div className=' p-4 rounded-2xl gap-2 flex place-items-center '>
                <span><House size={40} strokeWidth={1.5} /></span>
                <h1 className='font-semibold text-2xl'>Student</h1>
            </div>
        </div>
    )
}

export default Sidebar
