import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withProfileRedirect = (Component) => {
    const ComponentWithRedirect = (props) => {
        if (props.isAuth) return <Redirect to={'/profile'}/>
        return <Component {...props}/>
    }

    return connect(mapStateToPropsForRedirect)(ComponentWithRedirect);
}