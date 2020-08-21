import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});



const  ExpenseCard = (props) => {
  const {expe} = props
  const  id  = expe.id
  const classes = useStyles();


  // const clickOnEdit = (expe) =>{

  //   this.props.clickOnEdit(expe);

  // }


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
        <Button size="small" color="primary">
        <i className="far fa-trash-alt"></i>
         Delete
        </Button>
      </CardActions>
    </Card>
  );
}
export default ExpenseCard;