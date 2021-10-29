
import MenuCard from  "../components/MenuCard"
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

  const ContainerStyle = styled.body`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: row;
  .leftBox{
   height: 500px;
    display:flex;
    background-color:blue;
  }
  .rightBox{


  }
  `;
function Menu(props) {
  

  return (
    <ContainerStyle>
      <Container>
        <div>
        <Box className='leftBox'>
          <h1>Menu</h1>
        </Box>
        </div>
        <Divider />
        <Box className='rightBox'>
        <MenuCard menuItems={props.menuItems}/>
        </Box>
      </Container>
    </ContainerStyle>
  );
}

export default Menu;