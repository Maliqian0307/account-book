// Get visible expenses
// import moment from 'moment';

const getVisibleExpenses = (expenses, { expenseType, text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {     
      const createdAtMoment = expense.createdAt;
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const typeMatch = expense.category.toLowerCase().includes(expenseType.toLowerCase());
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && typeMatch && textMatch;

    }).sort((a, b) => {
      
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
  

export default getVisibleExpenses;