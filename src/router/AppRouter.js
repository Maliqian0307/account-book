import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


export const history = createBrowserHistory();

const AppRouter = ()=>{
    return (
      <Router history = {history}>
    <div>     
          <Header />
          <Switch>
            <Route path ='/' component = {LoginPage} exact={true} />
            <Route path = '/dashboard' component = {DashboardPage}  />
            <Route path = '/create' component = {AddExpensePage} /> 
            <Route path = '/edit/:id' component = {EditExpensePage} />
            <Route component={NotFoundPage} />

          </Switch>
    </div>
      </Router>
   
    

    )
}

export default AppRouter;