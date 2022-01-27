import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const ProtectedRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
            <Route
                {...rest}
                render={({ location }) =>
                loggedInUser ? (
                    children
                    ) : (
                    <Redirect
                        to={{
                        pathname: "/",
                        state: { from: location }
                   }}
            />
            )
            }
        />
    );
};

export default ProtectedRoute;