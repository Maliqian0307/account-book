import React from 'react';
import {connect} from 'react-redux';
import { sortByAmount,sortByDate,setTextFilter,setTypeFilter} from '../actions/filters';



const ExpenseListFilters = (props) => {

    
    return (
        <div>


        <select
            value = {props.filters.expenseType}
            onChange = {(e)=>{
                props.dispatch(setTypeFilter(e.target.value))
            }}>
            <option value="Daily goods"> Daily goods </option>
            <option value="Rent"> Rent </option>
            <option value="Utility"> Utility </option>
            <option value="Food"> Food </option>
            <option value="Transport"> Transport </option>
            <option value="Social"> Social </option>
            <option value="Travel"> Travel </option>
            <option value="Other"> Social </option>          
        </select> 

        <input 
            type='text'
            value={props.filters.text} 
            onChange = {(e)=>{
                props.dispatch(setTextFilter(e.target.value))
            }}
            />
        
        <select
            value = {props.filters.sortBy}
            onChange={(e)=>{
                props.dispatch(e.target.value ==='date' ? sortByDate() : sortByAmount())
            }}>
            <option value = 'date'>Date</option>
            <option value = 'amount'>Amount</option>
        
        </select> 
       
        
    </div>)
}

const mapStateToProps = (state) => {
    return {
        filters:state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);


// expenseType:'',
// text:'',
// sortBy:'date',