import React from 'react';
import {connect} from 'react-redux';
import { startEditExpense,startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

//Any component rendered by react router will contain the following props: match, location, and history.
const EditExpensePage = (props)  =>{
    // console.log(props); //dispatch,match,location,history,expense
   
    return(
        <div>
            {/* something needs to be edit : {props.match.params.id} */}
            <ExpenseForm 
                expense= {props.expense}
                onSubmit={(expense)=>{
                props.dispatch(startEditExpense(props.expense.id, expense))//props.expense.id是action里的id，是通过router的匹配得到的
                props.history.push('/');

            }} />
            <button onClick={()=>{
                props.dispatch(startRemoveExpense(props.expense))
                props.history.push('/');
            
            }}>
            Remove</button>
        </div>
    )
}

const mapStateToProps = (state,props)=>{
    // console.log(state); //一个object, includes auth(object), expenses(array), filters(object)
    // console.log(props); //match,location,history
    return {
    expense:state.expenses.find((expense) => (expense.id === props.match.params.id))   
}
} 
export default connect(mapStateToProps)(EditExpensePage);