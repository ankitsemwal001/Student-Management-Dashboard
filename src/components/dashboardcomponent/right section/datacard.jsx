
import { Users } from 'lucide-react';
import { User } from 'lucide-react';
import { Box } from 'lucide-react';



const Datacard = ({ data = [] }) => {


    const totalStudents = data.length;
    const totalMale = data.filter((s) => s.gender === 'Male').length;
    const totalFemale = data.filter((s) => s.gender === 'Female').length;

    return (
        <div className='mt-8'>

            <div className='flex gap-5'>
                <div className="flex items-center gap-4 border border-transparent h-32 w-80 rounded-2xl p-4 shadow-md">
                    <span className="flex items-center justify-center  p-3 rounded-xl bg-indigo-300 text-indigo-800">
                        <Users size={40} strokeWidth={2.5} />
                    </span>

                    <div>
                        <h1 className="text-2xl font-medium">Total Students</h1>
                        <h3 className="text-3xl font-bold">{totalStudents}  </h3>
                    </div>
                </div>


                <div className='flex items-center gap-4 border border-transparent shadow-md h-32 w-80 rounded-2xl p-4'>
                    <span className='bg-emerald-300 items-center justify-center p-3 rounded-lg text-emerald-800 font-bold'>
                        <User size={40} strokeWidth={2.5} /></span>
                    <div>
                        <h1 className="text-2xl font-medium">Male Students</h1>
                        <h3 className="text-3xl font-bold">{totalMale}</h3>
                    </div>
                </div>




                <div className='flex items-center gap-4 border border-transparent h-32 w-80 rounded-2xl p-4 shadow-md'>
                    <span className='bg-fuchsia-300 items-center justify-center p-3 rounded-lg text-fuchsia-800 font-bold'>
                        <User size={40} strokeWidth={2.5} /></span>
                    <div>
                        <h1 className="text-2xl font-medium">Female Students</h1>
                        <h3 className="text-3xl font-bold">{totalFemale}</h3>
                    </div>
                </div>


                <div className='flex items-center gap-4 border border-transparent h-32 w-80 rounded-2xl p-4 shadow-md'>
                    <span className='bg-blue-300 items-center justify-center p-3 rounded-lg text-blue-800 font-bold'><Box size={40} strokeWidth={1.5} /></span>
                    <div>
                        <h1 className="text-2xl font-medium">Courses</h1>
                        <h3 className="text-3xl font-bold">6</h3>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Datacard
