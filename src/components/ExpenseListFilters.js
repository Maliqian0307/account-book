import React from 'react';
import {connect} from 'react-redux';
import { DatePicker} from 'antd';
import { sortByAmount,sortByDate,setTextFilter,setTypeFilter} from '../actions/filters';



const ExpenseListFilters = (props) => {
    // console.log(props);
    const { RangePicker } = DatePicker;
    
    return (
        <div className="content-container">
        <div className="input-group">
            <div className="input-group__item">
                <select
                className="select"
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
            </div>
            <div className="input-group__item">
                <input 
                type='text'
                placeholder="Search Expenses"
                className="text-input"
                value={props.filters.text} 
                onChange = {(e)=>{
                    props.dispatch(setTextFilter(e.target.value))
                }}
                />
            </div>
            <div className="input-group__item">
                <select
                className="select"
                value = {props.filters.sortBy}
                onChange={(e)=>{
                    props.dispatch(e.target.value ==='date' ? sortByDate() : sortByAmount())
                }}>
                <option value = 'date'>Date</option>
                <option value = 'amount'>Amount</option>
                </select> 
            </div>

            <div className="input-group__item">
                <RangePicker 
                className="select"
                bordered="false"
                size="large"
                />
            </div>
        </div>
        

        
        
        
       
        
    </div>)
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        filters:state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);


// expenseType:'',
// text:'',
// sortBy:'date',