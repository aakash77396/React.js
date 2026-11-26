
function Navbar() {
    return (
        <div className="relative mb-[13rem] md:mb-[10rem] lg:mb-[10rem]">
            <div className="bg-blue-950 text-white fixed top-0  justify-center items-center  flex md:justify-between lg:justify-between px-6px md:px-20 lg:px-20 w-full flex-col md:flex-row lg:flex-row">
                <div className="flex items-center p-4">
                    <div><span  className="bi bi-mortarboard-fill inline-block mr-2 text-4xl text-blue-400"></span></div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl mb-0">STUDENT PORTAL</h1>
                        <p className="text-[17px] md:text-[15px] lg:text-[15px] text-blue-400"><small>Academic Result Announcement System</small></p>
                    </div>
                </div>
                <div className="flex items-center text-[12px]">
                    <p className="mx-auto pb-4 md:p-4 lg:p-4">ACADEMIC YEAR 2026-2027</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
