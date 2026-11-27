import { Link } from "react-router-dom"
function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-200'>
      <h1 className='font-bold text-red-800 text-3xl hover:text-red-900'>Page Not Available</h1>
      <div>
        <p className="text-red-800">Return Back to </p>
        <Link to="/"><button className="btn bg-pink-600 text-white hover:bg-pink-700"><span className="bi bi-house-door-fill inline-block mr-2"></span>Home</button></Link>
      </div>
    </div>
  )
}

export default NotFound
