import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { editUser } from "../../Redux/Actions/userActions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});



const  ExpenseCard = (props) => {
  const {expe , user ,selectedCategory} = props
  const  id  = expe.id
  const classes = useStyles();

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.isLoading);
  const err = useSelector((state) => state.user.error);


 const clickOnDelete = (id) => {
  const  tempUser  = user
   if(id !== null)
   {
     console.log("Id" ,id)
  //   const  tempUser  = user
    const index = tempUser.categories[selectedCategory].expenses.findIndex(expense => (expense.id === id) );
    console.log("index" ,index)
   tempUser.categories[selectedCategory].expenses.splice(index,1);
   console.log("tempUser" ,tempUser)
  // //  setUserAdd(tempUser);
     dispatch(editUser(tempUser.id, tempUser));

   }

  }


  return (
    <Card className={`${classes.root} m-2`} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {expe.name}
          </Typography>
          <Typography gutterBottom  component="h5">
            {expe.description}
          </Typography>
          <Typography gutterBottom  component="h5">
            {expe.spentAmount}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
        size="small"
         color="primary"
         onClick={() => props.clickOnEdit(expe.id)}>
        <i className="fas fa-edit"></i>
          Edit
        </Button>
        <Button 
        onClick={() => clickOnDelete(expe.id)}
        size="small" 
        color="primary">
        <i className="far fa-trash-alt"></i>
         Delete
        </Button>
      </CardActions>
    </Card>
  );
}
export default ExpenseCard;