import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "../pages/Menu";
import Show from "../pages/Show";
import Home from "../pages/Home";


function Main(props) {
  const [menuItems, setMenuItems] = useState(null);

  const URL = "http://localhost:3001/menu/";

  const getMenuItems = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setMenuItems(data);
  };



  useEffect(() => getMenuItems(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home menuItems={menuItems}  />
        </Route>
        <Route path="/menu" />
            <Menu menuItems={menuItems} />
      </Switch>
    </main>
  );
}

export default Main;