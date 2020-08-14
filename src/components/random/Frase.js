import React, {  useState, useEffect} from 'react';
import {Card,  Button, CardContent, Typography, CardMedia, LinearProgress, Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Frase (){
  const [frase, setFrase] = useState({});
  const [imgSrc, setImg] = useState(null);
  const [displayData, setData] = useState(false);
  const [error, setError] = useState(false);
  
  const customCss = makeStyles((theme) => ({
    heroButtons: {
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(25)
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));

  const classes = customCss();

  const obtenerFrase = async () => {
    setData(false);
    setError(false);
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    const api2 = await fetch(`https://breakingbadapi.com/api/characters?name=${frase[0].author}`);
    const imgSrc = await api2.json()
    if(imgSrc.length > 0){
      setFrase(frase[0]);
      setImg(imgSrc[0]);
      setData(true);
    }else{
      setError(true);
    }
  }

  
  useEffect( () => {
    obtenerFrase()
  }, []);
  

  let component = displayData
  ? <>
    <Card>
      <CardContent>
        <Typography gutterBottom variant="caption" component="h2">
        {frase.quote}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
        </Typography>
      </CardContent>
      <CardMedia
        style={{height: 90, paddingTop: '100%'}}
        image={imgSrc.img}
        title="lorem ipsum"
        className={classes.media}
      />
    </Card>
    <Button variant="contained" color="primary" className={classes.heroButtons}
      onClick={obtenerFrase}>
      Get BB PHRASE
    </Button>
  </>
  : 
    <>
      <Card>
        <CardContent>
          <LinearProgress></LinearProgress>
        </CardContent>
      </Card>
    </> 

  return (
    <>
    {component}
    <Box p={1}></Box>
    {error && (
      <Alert variant="filled" severity="error"
      action={
        <Button color="inherit" size="small" onClick={obtenerFrase}>
          Try Again!
        </Button>
      }
      >
       Yeah Bitch, Magnets and error fetching data!
      </Alert>
    )}
    </>
  )
}

export default Frase;