import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import selectExpenseTotal from '../selectors/selectExpenseTotal';
import getVisibleExpenses from '../selectors/getVisibleExpenses';

const ExpensesSummary = ({expenseCount,expensesTotal}) => {
    const expenseWord =expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title"> Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedExpenseTotal}</span></h1>
                <div className="page-header_actions">
                    <Link className="button" to="/create">
                    Add Expense
                    </Link>
                </div>

            </div>
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