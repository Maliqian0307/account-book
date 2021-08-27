import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import {connect} from 'react-redux';
import getVisibleExpenses from '../selectors/getVisibleExpenses';

const ExpenseList = (props) => {
    return (
        <div className = "content-container">
            <div className= "list-header">
                <div className = "show-for-mobile">Expenses</div>
                <div className = "show-for-desktop">Expense</div>
                <div className = "show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div>
                        <span className="list-item list-item--message">no expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense)=>{
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )         
            } 
            </div>  
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);