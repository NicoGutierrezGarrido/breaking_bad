import React, {  useState, useEffect, Fragment } from 'react';
import {Card,  Button, CardContent, Typography, CardMedia, LinearProgress, Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Personaje (){
  // variable estado -- actualizar estado
  const [personaje, setPersonaje] = useState();
  const [displayData, setData] = useState(false);
  const [error, setError] = useState(false);
  const customCss = makeStyles((theme) => ({
    heroButtons: {
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(25)
    },
  }));

  const classes = customCss();

  const obtenerPersonaje = async () => {
    setData(false);
    setError(false);
    const item = await fetch('https://breakingbadapi.com/api/character/random');
    const personaje = await item.json()
    if(personaje.length > 0){
      setPersonaje(personaje[0]);
      setData(true);
    } else {
      setError(true);
    }
  }
  useEffect( () => {
    obtenerPersonaje()
  }, []);


  let component = displayData
  ? <Fragment>
      <Card>
        <CardContent>
            <Typography gutterBottom variant="caption" component="h2">
              {personaje.name}.
            </Typography>
        </CardContent>
        <CardMedia
          style={{height: 90, paddingTop: '100%'}}
          image={personaje.img}
          title="lorem ipsum"
        />
      </Card>
      <Button variant="contained" color="primary" className={classes.heroButtons}
        onClick={obtenerPersonaje}>
        Get BB Character
      </Button>
    </Fragment> 
    : <>
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
          <Button color="inherit" size="small" onClick={obtenerPersonaje}>
            Try Again!
          </Button>
        }
      >
      You have an error fetching data, Better Call Saul!
      </Alert>
    )}
    </>
  )
}

export default Personaje;