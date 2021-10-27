import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';

import Heart from './MenuCardFormButtons'
import { Link } from "react-router-dom";

function MenuCard({ menuItems }) {

console.log({menuItems})

  return (
    <div>
        <card>
            <CardMedia
                component="img"
                height="194"
                image={menuItems.image}
                alt="Paella dish"
            />
             <CardHeader 
                action={
                 <Heart />
                }
                title={menuItems.name}
                subheader={menuItems.description}
            />
        </card>
    </div>
  );
}

export default MenuCard;