import React from 'react';
import {NavLink} from 'react-router-dom';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';



const Header= ({startLogout}) => {
    return (
        <div>
            <h1> Account Book </h1>
            <NavLink to="/"> Dashboard </NavLink>
            <NavLink to="/create"> Create Expense </NavLink>
            <button onClick={startLogout}> logout </button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    startLogout : () => dispatch(startLogout()) 
})
export default connect(undefined,mapDispatchToProps)(Header);

