import React from 'react';
import {Link} from 'react-router-dom';
import numeral from 'numeral';

const ExpenseListItem = ({id,category,description,amount,createdAt}) =>{
    

    return (
        <div>
            <Link to={`/edit/${id}`}>
            <h3>{description}</h3>                 
            </Link>
            <p>category:{category} {numeral(amount).format('$0,0.00')} date:{createdAt}</p>
            <br/>
        </div>
    )
}



export default ExpenseListItem;