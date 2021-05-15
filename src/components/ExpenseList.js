import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import {connect} from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
const ExpenseList = (props) => {
    return (
        <div>
            <p>ExpenseList</p>
            {props.expenses.map((expense)=>{
                return(
                    <ExpenseListItem key={expense.id} {...expense} />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses:getVisibleExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);