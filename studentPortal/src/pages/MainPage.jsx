import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/Authcontext'
import { useNavigate } from 'react-router-dom'

function MainPage() {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div className='w-[85%] md:w-[70%] lg:w-[70%] mx-auto mt-5'>
            <div>
                <p className='font-bold text-[12px] text-green-700 mb-3 '>YOUR FUTURE STARTS HERE</p>
                <h1 className='font-bold text-4xl mb-3'>Check Your Results</h1>
                <p className='text-gray-500 text-[15px]'>Welcome to the Student Result Portal. Check your academic performance and view your <br /> examination result.</p>
            </div>

            {/* result information */}
            <div className='border-2 shadow rounded-2xl mt-5 bg-white'>
                <div className="flex items-center m-4 pb-3 border-b-2">
                    <div><span className="bi bi-file-earmark-text-fill inline-block mr-2 text-4xl "></span></div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl mb-0 mx-auto">Result Information</h1>
                        <p className="text-[15px] md:text-[15px] lg:text-[15px] text-gray-500"><small>Student academic details</small></p>
                    </div>
                </div>
                <div className='grid grid-cols-2 p-5'>
                    <div className='pb-5 pr-2'>
                        <p className='text-gray-500 text-[13px]'>Student Name</p>
                        <h1 className='text-[17px] font-bold'>Aakash Kumar</h1>
                    </div>
                    <div className='pb-5 pr-2'>
                        <p className='text-gray-500 text-[13px]'>Course</p>
                        <h1 className='text-[17px] font-bold'>Java Full Stack</h1>
                    </div>
                    <div className='pb-2 pr-2'>
                        <p className='text-gray-500 text-[13px]'>Examination</p>
                        <h1 className='text-[17px] font-bold'>Final Assessment</h1>
                    </div>
                    <div className='pb-2 pr-2'>
                        <p className='text-gray-500 text-[13px]'>Institute</p>
                        <h1 className='text-[17px] font-bold'>Institute Naresh IT</h1>
                    </div>
                </div>


                <div onClick={()=>navigate(user ? "/result" : "/auth")} className='w-[90%] rounded flex justify-center items-center mx-auto bg-green-800 hover:bg-green-900 transition-all  mb-2 p-3 text-[13px] text-white font-bold cursor-pointer'>
                    <h1>ANNOUNCE RESULT</h1>
                    <span className='bi bi-arrow-up-right inline-block ml-3 text-[15px]'></span>
                </div>

                <div className='text-[12px] text-center mb-4'>
                    <p>Please confirm before viewing your result.</p>
                </div>
            </div>

            <div className='grid grid-cols-2 mt-4 mb-24 '>
                <div className='p-4 bg-white rounded mr-4 shadow'>
                    <span className='bi bi-shield-lock-fill pb-2 block text-2xl'></span>
                    <h3 className='font-bold pb-2'>Student Access</h3>
                    <p>Confirmation before viewing results.</p>
                </div>
                <div className='p-4 bg-white rounded ml-4 shadow'>
                    <span className='bi bi-bag-check-fill pb-2 block text-2xl'></span>
                    <h3 className='font-bold pb-2'>Result Report</h3>
                    <p>View your academic result details.</p>
                </div>
            </div>

            {/* copyright */}
            <div className='text-[12px] text-gray-600 text-center mb-8'>
                <p>© 2026 Student Portal | Academic Result System</p>
            </div>
        </div>
    )
}

export default MainPage
