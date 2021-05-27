import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';  
import getVisibleExpenses from './selectors/getVisibleExpenses';
import './firebase/firebase';




const store = configureStore();


// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
//   });
  


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));