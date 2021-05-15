import uuid from 'uuid';

export const addExpense = (
    {
        category='',
        description='',
        amount=0,
        createdAt=''
    } = {}) => ({
        type:'ADD_EXPENSE',
        expense:{
            id:uuid(),
            category,
            description,
            amount,
            createdAt,
            
        }
    })

export const editExpense = (id,update)=>({
    type:'EDIT_EXPENSE',
    id,
    update
})
    
export const removeExpense= ({id})=>({
    type:'REMOVE_EXPENSE',
    id
})
