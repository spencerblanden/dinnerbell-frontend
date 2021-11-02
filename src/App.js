import Nav from './components/Nav';
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu";
import Login from './pages/Login';
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import { Redirect } from 'react-router';
import Show from './pages/Show';
import { useRef } from 'react';
import { auth } from './services/firebase';

import './App.css';






function App() {
const [ user, setUser ] = useState(null);

const [userDetails, setUserDetails] = useState(null);

const [menuItems, setMenuItems] = useState(null);

const fetchData = useRef(null);



const URL = "http://localhost:3001/api/";

const getMenuItems = async () => {
  // if(!user) return;
  // const token = user.getIdToken()
  const response = await fetch(`${URL}menu/`);
  const data = await response.json();
  
  setMenuItems(data)
};

const getUserDetails = async () => {
  if(!user) return;
  const token = user.getIdToken()
  const response = await fetch(`${URL}user/`, {
      method: 'Get',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  const data = await response.json();
  setUserDetails(data)
};


const createMenuItem = async dish => {
  if(!user) return;
  const token = await user.getIdToken();
  const data = {...dish ,
    managedBy: user.uid
  } // attach logged in user's uid to the data we send to the server
  console.log(data)
  await fetch(URL, {
    method: 'POST', 
    headers: {
      'Content-type': 'Application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(data)
  });
  getMenuItems();
}


const updateMenuItem = async dish => {
  if(!user) return;
  const token = await user.getIdToken();
  const data = {...dish ,
    managedBy: user.uid
  } // attach logged in user's uid to the data we send to the server
  console.log(data)
  await fetch(URL, {
    method: 'PUT', 
    headers: {
      'Content-type': 'Application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(data)
  });
  getMenuItems();
}

const updateUserDetails = async ind => {
  if(!user) return;
  const token = await user.getIdToken();
  const data = {...ind ,
    user: user.uid
  } // attach logged in user's uid to the data we send to the server
  console.log(data)
  await fetch(URL, {
    method: 'PUT', 
    headers: {
      'Content-type': 'Application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(data)
  });
  getUserDetails();
}



useEffect(() => {   
  getMenuItems()}
  , [user]);

  useEffect(() =>{ 
  const unsubscribe = auth.onAuthStateChanged(user => {
    setUser(user)
    
    // if(user) {
    //   fetchData.current()
    // } else {
    //   setMenuItems([])
    // }

  })
  return () => unsubscribe()
  }, [user])
  
  return (
    <>
      <Nav user={user}/>
      <Switch>
        <Route exact path="/">
          <Home   />
        </Route>
        <Route path="/menu" >
            <Menu menuItems={menuItems} 
            updateMenuItem={updateMenuItem} 
            userDetails={userDetails}
            updateUserDetails={updateUserDetails}/>
        </Route>
        <Route path="/login" render={() => (
          user ? <Redirect to='/dashboard' /> : <Login />
        )}>
        </Route>
        <Route path="/dashboard" render={() => (
          user ? <Dashboard menuItems={menuItems}
          createMenuItem={createMenuItem}
          /> 
          : <Redirect to='/login' />
        )} >
            
        </Route>
        <Route>
          <Show />
        </Route>
      </Switch>
   </>
  );
}

export default App;
