import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';  
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


ReactDOM.render(<p>loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('root'));
})
