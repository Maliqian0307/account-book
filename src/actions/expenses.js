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
    return (dispatch) =>{
    const {
        category='',
        description='',
        amount=0,
        createdAt=''
    } = expenseData
    const expense = {category,description,amount,createdAt};
    //return的这个function是thunk
    return database.ref('expenses').push(expense).then((ref)=>{
        dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        })   
    }}




export const editExpense = (id,update)=>({
    type:'EDIT_EXPENSE',
    id:id,
    update:update
})
    



export const removeExpense= (expense)=>({
    type:'REMOVE_EXPENSE',
    id:expense.id
})



//set expense,把数据从firebase拿出来，保证刷新之后还能有数据
export const setExpenses = (expenses) =>({
    type:'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot)=>{
            const expenses =[];
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
            });
            dispatch(setExpenses(expenses));
        }) 
    
}} 
    
