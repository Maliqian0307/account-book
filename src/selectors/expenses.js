// Get visible expenses

const getVisibleExpenses = (expenses, { expenseType, text, sortBy }) => {
    return expenses.filter((expense) => {       
      const typeMatch = expense.category.toLowerCase().includes(expenseType.toLowerCase());
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return typeMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
  

export default getVisibleExpenses;