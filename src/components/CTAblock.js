import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const CTAStyle = styled.section`
       .ctaBox {
            display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgb(131, 0, 11);
        height: 11rem;
        width: 100%;
        box-shadow: 1px 1px 3px 2px #808080;
        .text{
           display: flex;
           justify-content: flex-end;
           align-items: flex-end;
           margin-right: 35px;          
           font-size: 30px;
           color: whitesmoke;
        }
        .Link{
          text-decoration: none;
         
        }
        Button {
            border: 3px solid whitesmoke;
            color: whitesmoke;
            background-color: #464444;
        }
       }
       
       
`;


const CTAblock = (props) => {

    return (
        <CTAStyle >
           <Box className='ctaBox'>
            <Box className='text'>
                <h1> FAMILY OWNED AND OPERATED </h1>
            </Box> 
            <Box className='button'>
            <Link to='/menu' className='Link'>
                <Button 
                size='large' 
                variant="contained" 
                > 
                    MENU
                </Button>
                </Link >
            </Box> 
           </Box>
        </CTAStyle>
    );
}

export default CTAblock;