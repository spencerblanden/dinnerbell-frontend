import Nav from './components/Nav';
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu";

import Home from "./pages/Home";


import './App.css';

function App() {
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
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home menuItems={menuItems}  />
        </Route>
        <Route path="/menu" >
            <Menu menuItems={menuItems} />
        </Route>
      </Switch>
   </>
  );
}

export default App;
