import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Country.css';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


const Country = (props) => {
    const {flag, name, capital} = props.countrys;
    const history = useHistory();
    const handleMore = (country) =>{
        const url = `/more/${country}`;
        history.push(url);
    }
    const classes = useStyles();
    return (
      <div className='country'>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={flag}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {capital}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button onClick={() => handleMore(name)}  size="small" color="primary">
            More
          </Button>
        </CardActions>
      </Card>
      </div>

    );
};

export default Country;