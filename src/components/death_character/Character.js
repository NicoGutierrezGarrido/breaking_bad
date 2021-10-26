import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  CardContent,
  Typography,
  CardMedia,
  LinearProgress,
  Box,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Character() {
  // variable estado -- actualizar estado
  const [character, setCharacter] = useState({});
  const [displayData, setData] = useState(false);
  const [error, setError] = useState(false);

  const customCss = makeStyles((theme) => ({
    heroButtons: {
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(25),
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
  }));

  const classes = customCss();

  const obtenerCharacter = async () => {
    setData(false);
    setError(false);
    const api = await fetch("https://breakingbadapi.com/api/random-death");
    const character = await api.json();

    if (character) {
      setCharacter(character);
      setData(true);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    obtenerCharacter();
  }, []);

  let component = displayData ? (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="caption" component="h2">
            {character.death} - Reason Death: {character.cause}
          </Typography>
          <Typography color="textSecondary" gutterBottom></Typography>
        </CardContent>
        <CardMedia
          style={{ height: 90, paddingTop: "100%" }}
          image={character.img}
          title="lorem ipsum"
          className={classes.media}
        />
      </Card>
      <Button
        variant="contained"
        color="primary"
        className={classes.heroButtons}
        onClick={obtenerCharacter}
      >
        Get BB Death
      </Button>
    </>
  ) : (
    <>
      <Card>
        <CardContent>
          <LinearProgress></LinearProgress>
        </CardContent>
      </Card>
    </>
  );

  return (
    <>
      {component}
      <Box p={1}></Box>
      {error && (
        <Alert
          variant="filled"
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={obtenerCharacter}>
              Try Again!
            </Button>
          }
        >
          Yeah Bitch, Magnets and error fetching data!
        </Alert>
      )}
    </>
  );
}

export default Character;
