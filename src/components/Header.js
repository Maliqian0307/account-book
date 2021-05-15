import React from 'react';
import {NavLink} from 'react-router-dom';


const Header= () => {
    return (
        <div>
            <h1>Account Book</h1>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/create">Create Expense</NavLink>
            
        </div>
    )
}

export default Header;

