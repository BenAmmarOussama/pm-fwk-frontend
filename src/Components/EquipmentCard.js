import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const EquipmentCard = (props) => {
  return (
    <Grid item key={props.key} xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography>Quantity: {props.quantity}</Typography>
          <Typography>{props.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EquipmentCard;
