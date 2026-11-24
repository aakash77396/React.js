import React from 'react'

function Login() {
    function handleLogin(event){
        event.preventDefault();
        confirm("Successfully Login!!");
    }
  return (
    <div>
      <form onSubmit={handleLogin} className='form w-150 mx-auto'>
          <h1 className='text-center'>Login Page</h1>
          <label className='form-text font-bold' htmlFor="name">Name</label>
          <input value={new URLSearchParams(location.search).get('name')} pattern='[a-zA-Z ]+' title="Only letters and spaces are allowed" className='form-control' type="text" name="name" id="name" placeholder='Enter Your Name' required />

          <label className='font-bold form-text' htmlFor="email">Email</label>
          <input value={new URLSearchParams(location.search).get('email')} className='form-control' pattern='/^[a-zA-Z0-9._%+-]+@gmail\.com$/i' type="email" name="email" id="email" placeholder='Email' required />

          <button type='submit' className='btn btn-primary form-text'>Login</button>
      </form>
    </div>
  )
}

export default Login
