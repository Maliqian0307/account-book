const expenseReducer = (state=[],action)=>{
switch(action.type){
    case'ADD_EXPENSE':
    return [
        ...state,
        action.expense
    ];//array spread operator,可以取代concat

    case'EDIT_EXPENSE':
    return state.map((expense)=>{
        if(expense.id === action.id){
            return {
            ...expense,
            ...action.update
            }//改变需要改变的那个expense
        } else {
            return expense;
        }
    });

    case'REMOVE_EXPENSE':
    //.filter()可以get a new array back(不会change原来的array)
    return state.filter((expense) => { 
        return expense.id !== action.id })

    default:
    return state;
}
}

export default expenseReducer;
