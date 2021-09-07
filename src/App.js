import MiniDrawer from './components/MiniDrawer';
// import DHeader from './components/theme';
import './App.css';
import { Box, Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <div>
      <MiniDrawer/>
      </div>
      {/* <DHeader /> */}
      <Container style={{padding: 0}}>ss</Container>
    </div>
  );
}

export default App;
