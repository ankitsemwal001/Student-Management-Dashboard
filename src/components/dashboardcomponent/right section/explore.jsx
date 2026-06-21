import React from 'react'
import { Search } from 'lucide-react';


const Explore = () => {


    return (
        <div className='mt-8 '>
            <div className='w-full gap-3 flex '>
                <input type="search" placeholder='🔍 Search by name' className='w-full cursor-text h-10 px-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500' id="" />
                <button className='border p-1 w-1/4 rounded'
                >All courses</button>
            </div>

        </div>
    )
}

export default Explore
