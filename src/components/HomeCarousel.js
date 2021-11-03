
import Home from "../pages/Home";
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


function HomeCarousel(props) {
  var items = [
    {
        name: "Dinner Bell",
        description: "PROUDLY SERVING BEREA, KY",
        image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/183387468_4282702905107027_5856822079759098194_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=KSxx7lM6YkYAX-Yf8eM&_nc_ht=scontent-dfw5-2.xx&oh=133098d93d17b68b43e690a499973655&oe=61A7FA7F"
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/za1bPIMUMcx9XYCynHfUog/348s.jpg"
    }
]

return (
    <Carousel>
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
    </Carousel>
)
}

function Item(props)
{
return (
    <Paper>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <img src={props.item.image} />

        <Button className="CheckButton">
            Check it out!
        </Button>
    </Paper>
)
}

export default HomeCarousel;