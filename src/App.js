import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminLogin from './Components/Admin Login/AdminLogin';
import AdminBar from './Components/Admin/Dashboard/AdminBar';
import Home from './Components/Home/Home';
import UserLogin from './Components/User Login/UserLogin';

export const UserContext = createContext();
export const TypeContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('username'));
    const [loggedInType, setLoggedInType] = useState(localStorage.getItem('type'));
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <TypeContext.Provider value={[loggedInType, setLoggedInType]}>

                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/panel">
                            <AdminBar></AdminBar>
                        </Route>
                        
                        <Route path="/adminLogin">
                            <AdminLogin></AdminLogin>
                        </Route>

                        <Route path="/userlogin">
                            <UserLogin></UserLogin>
                        </Route>
                    </Switch>
                   
                </Router>
        </TypeContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
