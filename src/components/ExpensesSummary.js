import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenseTotal from '../selectors/selectExpenseTotal';
import getVisibleExpenses from '../selectors/getVisibleExpenses';

const ExpensesSummary = ({expenseCount,expensesTotal}) => {
    const expenseWord =expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totaling {formattedExpenseTotal}</h1>
        </div>
    )
}


const mapStateToProps = (state) =>{
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    return {
        expenseCount : visibleExpenses.length,
        expensesTotal : selectExpenseTotal(visibleExpenses)
    } 
}

export default connect(mapStateToProps)(ExpensesSummary);