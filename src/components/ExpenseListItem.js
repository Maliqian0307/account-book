import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id,category,description,amount,createdAt}) =>{
    

    return (
        <div>
            <Link to={`/edit/${id}`}>
            <h3>{description}</h3>                 
            </Link>
            <p>category:{category} amount:{amount} date:{createdAt}</p>
            <br/>
        </div>
    )
}



export default ExpenseListItem;