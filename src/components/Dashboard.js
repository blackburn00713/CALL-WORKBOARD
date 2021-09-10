import React from 'react';
import { Backdrop, Box, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  backdrop: {
    zIndex: 1,
    color: '#fff',
  },
}));


const Dashboard = ({drawer}) => {
  const classes = useStyles();

  return ( 
    <>
          <Backdrop className={classes.backdrop} open={drawer}  />

    </>
   );
}
 
export default Dashboard;