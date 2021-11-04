
import Home from "../pages/Home";
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import styled from 'styled-components';
import { Box } from "@material-ui/core";


const ItemStyle = styled.section`
          display: flex;
        flex-direction: column; 
         align-items: center;
        justify-content: center;
        align-items: center;
        h2{
          position: absolute;
          font-size: 40px;
        }
      
         img {
          
         width:100%;
      object-fit: cover;
        overflow: clip;
          }
          
`;

const CarouselStyle = styled.section`
        /* width: 100%;
         
         object-fit: scale-down; */
`;


function HomeCarousel(props) {
  var items = [
    {
        name: "Dinner Bell",
        description: "PROUDLY SERVING BEREA, KY",
        image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/183387468_4282702905107027_5856822079759098194_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=KSxx7lM6YkYAX-Yf8eM&_nc_ht=scontent-dfw5-2.xx&oh=133098d93d17b68b43e690a499973655&oe=61A7FA7F"
    },
    // {
    //     name: "Dinner Bell",
    //     description: "Hello World!",
    //     image: "https://s3-media0.fl.yelpcdn.com/bphoto/za1bPIMUMcx9XYCynHfUog/348s.jpg"
    // },
    {
      name: "Dinner Bell",
        description: "Hello World!",
      image: 'https://1.bp.blogspot.com/-oLxJ8okre_Q/YFN_JZXeArI/AAAAAAACFNM/S_6IPFUGM7orpA-AKiEmd-seluZFhh2QACLcBGAsYHQ/s2048/D1.jpg'
    }
]

return (
  // <CarouselStyle>
    <Carousel sx={{ width: 1 , objectfit: "cover"  }}>
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
    </Carousel>
    // </CarouselStyle>
)
}

function Item(props)
{
return (
  <ItemStyle>
    
        <h2>{props.item.name}</h2>
        <img src={props.item.image} />
    
    </ItemStyle>
)
}

export default HomeCarousel;