
const filtersReducerDefaultState = {
    expenseType:'',
    text:'',
    sortBy:'date',
};

const filtersReducer = (state = filtersReducerDefaultState,action) => {
    switch(action.type){
        case'SET_TYPE_FILTER':
        return {
            ...state,
            expenseType:action.expenseType
        }
        case'SET_TEXT_FILTER':
        return {
            ...state,
            text:action.text
        };
        case'SORT_BY_DATE':
        return{
            ...state,
            sortBy:'date'
        };
        case'SORT_BY_AMOUNT':
        return{
            ...state,
            sortBy:'amount'
        };
        default:
        return state;
    }
}

export default filtersReducer;