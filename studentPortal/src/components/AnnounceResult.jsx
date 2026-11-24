import Navbar from './Navbar'
import Footer from './Footer'

function AnnounceResult() {
    return (
        <div>
            <Navbar />
            <div className='w-[80%] md:w-[40%] lg:w-[40%] mx-auto mt-20 bg-white px-5 text-center py-7 rounded-2xl border-2'>
                <div className='border-b-2'>
                    <h1 className='text-center font-bold text-2xl mb-2 py-2'>STUDENT RESULT REPORT</h1>
                    <p className='py-3'>Academic Year: 2026-2027</p>
                </div>
                <div>
                    <p className='py-3'>Student Name: Aakash Kumar</p>
                    <p className='py-3'>Course: Java Full Stack</p>
                    <p className='py-3'>Examination: Final Assessment</p>
                    <p className='py-3'>Institute: Naresh IT</p>
                    <h2 className='py-3 font-bold text-2xl text-green-700'>RESULT: PASS</h2>
                    <p className='py-3'>Congratulations! Result announcement completed.</p>
                </div>
            </div>






            <Footer/>
        </div>
    )
}

export default AnnounceResult
