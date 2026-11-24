import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="w-full bg-black flex-wrap text-white flex flex-row md:flex-col justify-between items-center p-3">

      <div className="flex items-center p-2">
        <h1 className="font-medium mr-3">Google</h1>

        <img
          className="w-10 rounded-full"
          src="https://www.google.com/favicon.ico"
          alt="Google logo"
        />
      </div>

      <ul className="flex flex-wrap flex-row md:flex-col items-center p-2 gap-5">

        <li className="font-bol  cursor-pointer"><Link className="text-white font-bold" target="_blank" to="/">Home</Link></li>
        <li className="font-bold cursor-pointer"><Link className="text-white font-bold" target="_blank"  to ="/about">About</Link></li>
        <li className="font-bold cursor-pointer"><Link className="text-white font-bold" target="_blank"  to ="/contact">Contact</Link></li>
        <li className="font-bold cursor-pointer btn btn-primary"><Link className="text-white font-bold" target="_blank"  to ="/login">Login</Link></li>

        <li>
          <input
            className="bg-black text-white border border-white rounded px-3 py-1 outline-none"
            type="text"
            placeholder="Search"
            id="search"
          />
        </li>

      </ul>
    </div>
  )
}

export default Navbar