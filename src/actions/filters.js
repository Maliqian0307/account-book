export const setTypeFilter = (expenseType='')=>{
    return{
        type:'SET_TYPE_FILTER',
        expenseType
    }
}

export const setTextFilter = (text ='') =>{
    return {
        type:'SET_TEXT_FILTER',
        text
    }
}

export const sortByDate = () => {
    return {
        type:'SORT_BY_DATE'
    }
}

export const sortByAmount = () =>{
    return {
        type:'SORT_BY_AMOUNT'
    }
}

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
  });
  
  // SET_END_DATE
  export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  });
  