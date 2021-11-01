import Nav from './components/Nav';
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu";
import Login from './pages/Login';
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import { Redirect } from 'react-router';


import { auth } from './services/firebase';

import './App.css';
import { Unsubscribe } from '@material-ui/icons';


const ProtectedRoute = (props) => {
  if(props.user) {
    return props.component;
  } else {
    return <Redirect to='/login' />
  }
}


function App() {
const [ user, setUser ] = useState(null);

useEffect(() =>{ 
const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
return () => unsubscribe()
}, [user])

  const [menuItems, setMenuItems] = useState(null);

  const URL = "http://localhost:3001/menu/";

  const getMenuItems = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    setMenuItems(data)
  };

  useEffect(() => {   
    getMenuItems()}
    , []);

  return (
    <>
      <Nav user={user}/>
      <Switch>
        <Route exact path="/">
          <Home   />
        </Route>
        <Route path="/menu" >
            <Menu menuItems={menuItems} />
        </Route>
        <Route path="/login" render={() => (
          user ? <Redirect to='/dashboard' /> : <Login />
        )}>
            <Login  />
        </Route>
        <Route path="/dashboard" render={() => (
          user ? <Dashboard /> : <Redirect to='/login' />
        )} >
            <Dashboard  />
        </Route>
      </Switch>
   </>
  );
}

export default App;
