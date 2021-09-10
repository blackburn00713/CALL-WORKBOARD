import MiniDrawer from './components/MiniDrawer';
// import DHeader from './components/theme';
import './App.css';
import { Backdrop, Box, Container, makeStyles } from '@material-ui/core';
import Dashboard from './components/Dashboard';
import DrawerProvider from './Provider/DrawerProvider';
import { useState } from 'react';

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

function App() {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="App">
      <MiniDrawer drawer={drawer} setDrawer={setDrawer}/>
      <Dashboard drawer={drawer} />
    </div>
  );
}

export default App;
