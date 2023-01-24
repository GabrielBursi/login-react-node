import { BrowserRouter } from 'react-router-dom';

import './app.css'

import RoutesApp from "./routes/Routes";
import {Header} from './components';
import { ContextProvider } from './context';
import { Box } from '@mui/material';

function App() {
  return (
      <BrowserRouter>
        <ContextProvider>
            <Header/>
            <Box
              sx={{
                height:"90vh",
                width:"100wh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center", 
              }}
            >
              <RoutesApp/>
            </Box>
        </ContextProvider>
      </BrowserRouter>
  );
}

export default App;
