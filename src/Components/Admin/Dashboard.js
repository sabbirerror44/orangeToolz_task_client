import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import FileUpload from '../FileUpload/FileUpload';
import UserRegister from '../Register List/RegisterList';
import UserList from '../User List/UserList';

const Admin = () => {
    return (
        <>
            <Router>
                <Switch>
                   <Route exact path="/panel/userList">
                       <UserList></UserList>
                   </Route>
                   <Route exact path="/panel/registration">
                       <UserRegister></UserRegister>
                   </Route>
                   <Route exact path="/panel/fileUpload">
                        <FileUpload />
                   </Route>
                   
                </Switch>
            </Router>
        </>
    );
};

export default Admin;