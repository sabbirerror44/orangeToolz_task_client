import React, { useState } from 'react';

const UserRegister = () => {

    const [firstname, setFirstname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e)=>{
        e.preventDefault();
        
    }

    return (
        <section className="container my-5">
 
               <h3 className="text-danger text-center mb-4">User Registration</h3>
            <div className="d-flex justify-content-center"> 
                <div className="login-panel">
                    <form onSubmit={handleLogin}>
                    <label className="mb-2" htmlFor="firstname">First Name:</label><br />
                        <input type="text" id="firstname" placeholder="First Name" className="form-control mb-3" onChange={(e)=> setFirstname(e.target.value)} required/>
                        <label className="mb-2" htmlFor="username">Username:</label><br />
                        <input type="email" id="username" placeholder="Email" className="form-control mb-3" onChange={(e)=> setUsername(e.target.value)} required/>
                        <label className="mb-2" htmlFor="password">Password:</label><br />
                        <input type="password" id="password" placeholder="Password" className="form-control mb-3" onChange={(e)=> setPassword(e.target.value)} required/>
                        <div className="d-flex justify-content-center"> 
                        <input type="submit" value="Register" className="login-btn" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UserRegister;