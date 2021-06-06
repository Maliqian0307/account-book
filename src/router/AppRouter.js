import { BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = ()=>{
    return (
      <BrowserRouter>
    <div>     
          <Header />
          <Switch>
            <Route path ="/" component = {LoginPage} exact={true} />
            <Route path = "/dashboard" component = {DashboardPage}  />
            <Route path = "/create" component = {AddExpensePage} /> 
            <Route path ='/edit/:id' component = {EditExpensePage} />
            <Route component={NotFoundPage} />

          </Switch>
    </div>
      </BrowserRouter>
   
    

    )
}

export default AppRouter;