import React, { useState } from 'react';

const UserRegister = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch('http://localhost:5000/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, email, password}),
        })
            .then((res) => res.json())
            .then((result) => {
                    alert(result.message);
                })
        
    }

    return (
        <section className="container my-5">
 
               <h3 className="text-danger text-center mb-4">User Registration</h3>
                <div className="d-flex justify-content-center"> 
                <div className="login-panel">
                    <form onSubmit={handleSubmit}>
                    <label className="mb-2" htmlFor="name">Name:</label><br />
                        <input type="text" id="name" placeholder="Enter User's Name" className="form-control mb-3" onChange={(e)=> setName(e.target.value)} required/>
                        <label className="mb-2" htmlFor="email">Email:</label><br />
                        <input type="email" id="email" placeholder="Enter User's Email" className="form-control mb-3" onChange={(e)=> setEmail(e.target.value)} required/>
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