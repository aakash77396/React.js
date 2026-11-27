import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';

function Auth() {
    const [loginPassword, setLoginPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();

    const [registerName, setRegisterName] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");

    const handleLogin = (e) => {
        try {
        e.preventDefault();
        if (localStorage.getItem("email") === loginEmail && localStorage.getItem("password") === loginPassword) {
            login(loginEmail);

            alert("Login Successfull!!");
            navigate("/");

        } else {
            alert("Crediential invalid!!");
        }
        } catch (error) {
            alert(error.message);
        }
    }

    const handleRegister = (e) => {
        try {
            e.preventDefault();
            console.log(registerName + " " + registerEmail + " " + registerPassword);
            localStorage.setItem("name", registerName);
            localStorage.setItem("email", registerEmail);
            localStorage.setItem("password", registerPassword);
            alert("Register Successfull!!");
        } catch (error) {
            alert(error.message);
        }
    }
    
    return (
        <div className='w-100 min-vh-100 bg-blue-200 pt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] md:w-[60%] mx-auto md:border shadow rounded-md md:p-5'>
                <div className='md:mr-10 max-md:mb-3 p-1 '>
                    <form onSubmit={handleLogin} method='post' className='form form-control bg-blue-200 p-3 rounded-md' >
                        <h1 className='text-2xl text-center font-bold text-gray-800'>Login</h1>
                        <label className='form-text font-bold' htmlFor="login-email">Email</label>
                        <input onChange={(e) => { setLoginEmail(e.target.value) }} className='form-control' pattern='[a-zA-Z0-9._%+\-]+@gmail\.com' type="email" name="email" id="login-email" title='must end with "@gmail.com"' required placeholder='Email' />

                        <label className='form-text font-bold' htmlFor="login-password">Password</label>
                        <input onChange={(e) => { setLoginPassword(e.target.value) }} className='form-control' title='password must be at least one small letter,capital letter,number,special char and min length 8' pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+~\-.]).{8,}' type="password" name="password" id="login-password" required placeholder='Password' />
                        <button className='btn bg-purple-600 mt-3 w-100 text-white hover:bg-purple-700'>Login</button>
                    </form>
                </div>

                <div className='p-1'>
                    <form onSubmit={handleRegister} method='post' className='form form-control bg-blue-200 p-3 rounded-md' >
                        <h1 className='text-2xl text-center font-bold text-gray-800'>Register</h1>
                        <label className='form-text font-bold' htmlFor="name">Name</label>
                        <input onChange={(e) => { setRegisterName(e.target.value) }} className='form-control' type="text" name="name" id="name" placeholder='Enter Your Name' required />

                        <label className='form-text font-bold' htmlFor="reg-email">Email</label>
                        <input onChange={(e) => { setRegisterEmail(e.target.value) }} className='form-control' required title='must end with "@gmail.com"' pattern='[a-zA-Z0-9._%+\-]+@gmail\.com' type="email" name="email" id="reg-email" placeholder='Email' />

                        <label className='form-text font-bold' htmlFor="reg-password">Password</label>
                        <input onChange={(e) => { setRegisterPassword(e.target.value) }} className='form-control' required title='password must be at least one small letter,capital letter,number,special char and min length 8' pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+~\-.]).{8,}' type="password" name="password" id="reg-password" placeholder='Password' />
                        <button type='submit' className='btn bg-purple-600 mt-3 w-100 text-white hover:bg-purple-700'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth
