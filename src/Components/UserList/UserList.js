import React from 'react';
import './UserList.css';

const UserList = () => {

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
                        
                            <tr>
                                <td>Rahul Sikdar</td>
                                <td>sikdarrahul0@gmail.com</td>
                                <td>Active</td>
                                <td><button class="btn btn-primary">Edit</button></td>
                                <td><button class="btn btn-dark">Delete</button></td>
                            </tr>
                            <tr>
                                <td>Sabbir</td>
                                <td>sabbir@gmail.com</td>
                                <td>block</td>
                                <td><button class="btn btn-primary">Edit</button></td>
                                <td><button class="btn btn-dark">Delete</button></td>
                            </tr>
                        
                    </table>
            </div>
            </div>
        </div>
    );
};

export default UserList;