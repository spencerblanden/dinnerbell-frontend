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
import  Footer  from './components/Footer';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },});






function App() {
const [ user, setUser ] = useState(null);

const [userDetails, setUserDetails] = useState(null);

const [menuItems, setMenuItems] = useState(null);

const fetchData = useRef(null);


const USER_URL = "http://localhost:3001/api/user/"
const MENU_URL = "http://localhost:3001/api/menu/";

const getMenuItems = async () => {
  // if(!user) return;
  // const token = user.getIdToken()
  const response = await fetch(MENU_URL);
  const data = await response.json();
  
  setMenuItems(data)
};

const getUserDetails = async () => {
  if(!user) return;
  const token = await user.getIdToken()
  const response = await fetch(USER_URL, {
      method: 'Get',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      }
    })
  const data = await response.json();
  console.log(data)
  setUserDetails(data)
};


const createMenuItem = async dish => {
  if(!user) return;
  const token = await user.getIdToken();
  const data = {...dish ,
    managedBy: user.uid
  } // attach logged in user's uid to the data we send to the server
  console.log(data)
  await fetch(MENU_URL, {
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
  await fetch(MENU_URL, {
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
  await fetch(USER_URL, {
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
    <ThemeProvider theme={theme}>
    <div style={{ 
      backgroundImage: 'url(/DBBG.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
      }}>
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
      <Footer/>
   </div>
   </ThemeProvider>
  );
}

export default App;
