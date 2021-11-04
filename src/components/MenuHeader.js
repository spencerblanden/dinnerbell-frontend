import Box from '@material-ui/core/Box';

import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MenuHeaderStyle = styled.section`
       

       .imageContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-items: center;
        position: static;
       
        width: 100vw;
       
        img {
            width: 100%;
            background-size: 'cover';
        overflow: 'hidden';
        }
       }
`;

const MenuHeader = (props) => {

    return (
        <MenuHeaderStyle >
           <Box sx={{ elevation: 4 }} className='imageContainer'>
             <img src="https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg" alt="pancakes" />
           </Box>
        </MenuHeaderStyle>
    );
}

export default MenuHeader;