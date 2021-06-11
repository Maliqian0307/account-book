import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';

///component:Component 这是在rename
export const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => {
    // console.log(rest);//rest有location,dispatch,path和computedMatch
    return (
        //props：get all of the props that were passed to route.
        //props: We are passing those through to the individual component
        <Route {...rest} component= {(props)=> {
            console.log(props);//这个props是history,location,和match
            return(
            isAuthenticated ? (
                <div>
                    <Header />
                    <Component {...props} />
                </div>
            ) : (
            <Redirect to="/" />
            )
            )
        }} />
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated : !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);