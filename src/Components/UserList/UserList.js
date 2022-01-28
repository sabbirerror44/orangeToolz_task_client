import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([])
    const [updateData, setUpdateData] = useState({
        name: '',
        email: ''
    });

    const [show, setShow] = useState(false);

    const [userId, setUserId] = useState();
    const handleShow = (id) => {
        setUserId(id);
        setShow(true);
    }
    const handleClose = ()=>{
        setUpdateData({
            name: '',
            email: ''
        })
        setShow(false);
    }

    useEffect(()=>{
            fetch(`http://localhost:5000/users/allUsers`)
                .then((res) => res.json())
                .then((data) => {
                    setUsers(data);
                });
        }, []);

        const handleClickDelete = (id) =>{
            console.log(id);
            fetch(`http://localhost:5000/users/user/${id}`, {
                method: 'DELETE',
            })
            .then((res) => res.json())
            .then((result) => {
                    if(result.message) {
                           alert(result.message)
                           window.location.reload();
                    }
                 })
        }

        const handleClickUpdateStatus = (id, status) =>{
            fetch(`http://localhost:5000/users/${id}/${status}`, {
                method: 'PUT',
            })
            .then((res) => res.json())
            .then((result) => {
                    if(result.message) {
                           alert(result.message)
                           window.location.reload();
                    }
                 })
            }

 

    const handleSubmit =(e) =>{
        e.preventDefault();
        setShow(false);

        const updateObj = Object.fromEntries(Object.entries(updateData).filter(([_, v]) => v != ''));
   
        fetch(`http://localhost:5000/users/user/${userId}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateObj),
        })
        .then(res => res.json())
        .then(res => {
            alert(res.message);
            window.location.reload();
        })
    }
            

    return (
        <div>
            <div className="user-list">
            <div className="userlist-table">
                <table>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                        {
                            users.map(user => <>
                                <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button onClick={()=>handleClickUpdateStatus(user.id, user.status)} class="btn btn-dark">{user.status}</button></td>
                                <td><button onClick={()=>handleShow(user.id)} class="btn btn-primary">Edit</button></td>
                                <td><button onClick={()=>handleClickDelete(user.id)} class="btn btn-dark">Delete</button></td>
                            </tr>
                            
                            </>)
                        }
                            {/* <tr>
                                <td>Sabbir</td>
                                <td>sabbir@gmail.com</td>
                                <td>block</td>
                                <td><button class="btn btn-primary">Edit</button></td>
                                <td><button class="btn btn-dark">Delete</button></td>
                            </tr> */}
                        
                    </table>
                    <Modal show={show} >
                               <div className="m-5 p-4">
                                    <form onSubmit={handleSubmit}>
                                        <label htmlFor="name">Name</label>
                                        <br />
                                        <input id="name" type="text" onChange={(e)=> setUpdateData({...updateData, name: e.target.value})} className="mb-2" />
                                        <br />
                                        
                                        <label htmlFor="email">Email</label>
                                        <br />
                                        <input className="mb-2" id="email" type="text" onChange={(e)=> setUpdateData({...updateData, email: e.target.value})} />
                                        <br />
                                       
                                        <input className="btn btn-dark" type="submit" value="Submit" />
                                    </form>
                                </div>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                 </Modal>
            </div>
            </div>
        </div>
    );
};

export default UserList;