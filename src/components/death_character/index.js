import React from 'react';
import {Grid} from '@material-ui/core';
import Character from './Character';

function DeathCharacter(){
   return(
    <div>
        <Grid container spacing={10} justify="center" alignItems="center">
            <Grid item xs={1} md={3}>
              <Character/>
            </Grid>
        </Grid>
    </div>
  )
}

export default DeathCharacter;