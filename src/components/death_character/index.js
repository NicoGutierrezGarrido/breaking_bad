import React from "react";
import { Grid } from "@material-ui/core";
import Character from "./Character";

export default function DeathCharacter() {
  return (
    <Grid container spacing={10} justify="center" alignItems="center">
      <Grid item xs={1} md={3}>
        <Character />
      </Grid>
    </Grid>
  );
}