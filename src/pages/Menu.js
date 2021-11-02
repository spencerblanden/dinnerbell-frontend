
import MenuCard from  "../components/MenuCard"
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ItemType from "../components/ItemType";

  const ContainerStyle = styled.body`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: row;
  .leftBox{
    width: 40%;
   margin-right: 10px;
  }
  .rightBox{
    display: 'flex';
    flex-wrap: 'wrap';
    flex-direction: 'column';
    width: 100%;

  }
  .card{
    display: 'flex';
    flex-wrap: 'wrap';
    flex-direction: 'row';
  }
  `;



function Menu(props) {
  
console.log(props)
  return (
    <ContainerStyle>
     
      
        <Box className='leftBox'>
          <ItemType menuItems={props.menuItems}/>
        </Box>
       
        <Divider />
        <Box className='rightBox'>
        <MenuCard className='card'
        menuItems={props.menuItems} 
        updateMenuItem={props.updateMenuItem}/>
        </Box>
     
    </ContainerStyle>
  );
}

export default Menu;