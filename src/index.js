import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from'react-redux';
import AppRouter, {history} from './router/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';  
import {login, logout} from './actions/auth';
// import getVisibleExpenses from './selectors/getVisibleExpenses';
import {firebase} from './firebase/firebase';
import './styles/styles.scss';





const store = configureStore();


// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
//     console.log(state);
//   });
  


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>loading...</p>, document.getElementById('root'));



firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }        
        })    
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})
