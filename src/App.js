import Nav from './components/Nav';
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu";
import Login from './pages/Login';
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import { Redirect } from 'react-router';
import Show from './pages/Show';

import { auth } from './services/firebase';

import './App.css';
import { Unsubscribe } from '@material-ui/icons';





function App() {
const [ user, setUser ] = useState(null);

useEffect(() =>{ 
const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
return () => unsubscribe()
}, [user])

  const [menuItems, setMenuItems] = useState(null);

  const URL = "http://localhost:3001/api/menu/";

  const getMenuItems = async () => {
    const response = await fetch(URL);
    const data = await response.json();
  
    setMenuItems(data)
  };

  const updateMenuItem = async dish => {
    // if(!user) return;
    // const token = await user.getIdToken();
    const data = {...dish 
      // managedBy: user.uid
    } // attach logged in user's uid to the data we send to the server
    console.log(data, "data")
    await fetch(URL, {
      method: 'PUT', 
      headers: {
        'Content-type': 'Application/json',
        // 'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
    });
    getMenuItems();
  }

  

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
            <Menu menuItems={menuItems} 
            updateMenuItem={updateMenuItem} />
        </Route>
        <Route path="/login" render={() => (
          user ? <Redirect to='/dashboard' /> : <Login />
        )}>
        </Route>
        <Route path="/dashboard" render={() => (
          user ? <Dashboard /> : <Redirect to='/login' />
        )} >
            <Dashboard  />
        </Route>
        <Route>
          <Show />
        </Route>
      </Switch>
   </>
  );
}

export default App;
