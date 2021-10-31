import React, { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import { ApplicationContext } from "../providers/AuthProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { authenticated } = useContext(ApplicationContext);

    return (
        <Route {...rest} render={(props) => {
            if (!authenticated) {
                return <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            }

            return <Component {...props} />
        }} />
    );
}

export { PrivateRoute };