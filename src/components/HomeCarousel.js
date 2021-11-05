
import Home from "../pages/Home";
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import styled from 'styled-components';
import { Box } from "@material-ui/core";


const ItemStyle = styled.section`
          
          background-position: bottom 100%;
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
           height: 40%;
           max-height: 500px;
           min-height: 500px;
         width:100%;
      object-fit: cover;
        overflow: clip;
        background-position: top;
          }
          
`;

const CarouselStyle = styled.section`
        width: 100%;
         display: block;
         object-fit: scale-down;
         transform:scaleY(0.2);
        transform-origin:top;
`;


function HomeCarousel(props) {
  var items = [
    {
        name: "Dinner Bell",
        description: "PROUDLY SERVING BEREA, KY",
        image: "/dbkystorefront.jpeg"
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
  <div>
    <Carousel sx={{ width: 1 , objectfit: "cover" ,height: .5 }}>
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
    </Carousel>
    </div>
    // </CarouselStyle>

)
}

function Item(props)
{
return (
  <ItemStyle>
    
        {/* <h2>{props.item.name}</h2> */}
        <img src={props.item.image} />
    
    </ItemStyle>
)
}

export default HomeCarousel;