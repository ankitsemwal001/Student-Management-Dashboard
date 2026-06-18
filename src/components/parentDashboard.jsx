import { GraduationCap } from 'lucide-react';
import Sidebar from './dashboardcomponent/left section/sidebar';
import Data from './dashboardcomponent/right section/data';

const ParentDashboard = () => {
    return (
        <div className="min-h-screen place-items-center mt-9">
            <div className="border h-[90vh] w-5/6 rounded-lg">
                <div className="flex gap-2 items-center p-4 bg-blue-800 text-amber-50">
                    <span>
                        <GraduationCap size={40} strokeWidth={1.5} />
                    </span>
                    <h1 className="font-bold text-2xl">
                        Student Management Dashboard
                    </h1>
                </div>

                <div className="flex gap-8 bg-blue-20">
                    <Sidebar />
                    <Data />
                </div>
            </div>
        </div>
    );
};

export default ParentDashboard
