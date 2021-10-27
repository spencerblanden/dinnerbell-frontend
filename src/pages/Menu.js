import { useState } from "react";
import { Link } from "react-router-dom";
import MenuCard from  "../components/MenuCard"

function Menu(props) {
  
console.log(props.menuItems)
  return (
    <section>
      <MenuCard menuItems={props.menuItems}/>
    </section>
  );
}

export default Menu;