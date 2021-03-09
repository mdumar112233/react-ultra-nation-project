import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './CountryDetail.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const CountryDetail = () => {
    const [countrys , setCountry] = useState([]);
    const {name, capital, flag, region} = countrys;
    const {country} = useParams();
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${country}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [country])
    const classes = useStyles();

    return (
        <div className='county-detail'>
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
                      Name: {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Capital: {capital}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Region: {region}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
        </div>

    );
};

export default CountryDetail;