
import MenuCard from  "../components/MenuCard"

function Menu(props) {
  
console.log(props.menuItems, 'in menu.js')
  return (
    <section>
      <MenuCard menuItems={props.menuItems}/>
    </section>
  );
}

export default Menu;