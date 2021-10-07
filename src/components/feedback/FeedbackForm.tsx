import { Button, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from '@mui/system';
import React, { useState } from 'react'
import { Feedback } from "../models/feedback";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{

    }
  })
);


export default function FeedbackForm() {
  const classes = useStyles();

      return (
        <div className={classes.root}>
          Feedback form
        </div>
      );
}
