import React from "react";
import Frase from "./Frase";
import Personaje from "./Personaje";
import { Grid } from "@material-ui/core";

function Random() {
  return (
    <>
      <Grid container spacing={10} justify="center" alignItems="center">
        <Grid item xs={1} md={3}>
          <Frase />
        </Grid>
        <Grid item xs={1} md={3}>
          <Personaje />
        </Grid>
      </Grid>
    </>
  );
}

export default Random;
