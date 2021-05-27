import uuid from 'uuid';
import database from '../firebase/firebase';

// export const addExpense = (
//     {   
//         category='',
//         description='',
//         amount=0,
//         createdAt=''
//     } = {}) => ({
//         type:'ADD_EXPENSE',
//         expense:{
//             id:uuid(),
//             category,
//             description,
//             amount,
//             createdAt,
            
//         }
//     })

export const addExpense = (expense) => ({
    type:'ADD_EXPENSE',
    expense
})

//id是在这里面生成的
export const startAddExpense = (expenseData = {}) => {
    const {
        category='',
        description='',
        amount=0,
        createdAt=''
    } = expenseData
    const expense = {category,description,amount,createdAt}
    //return的这个function是thunk
    return (dispatch) => {
        database.ref().push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        })
        
    }
}



export const editExpense = (id,update)=>({
    type:'EDIT_EXPENSE',
    id:id,
    update:update
})
    

// export const removeExpense= ({id})=>({
//     type:'EDIT_EXPENSE',
//     id
// })
export const removeExpense= (expense)=>({
    type:'REMOVE_EXPENSE',
    id:expense.id
})

