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
          <Box
            sx={{
              overflowY:"hidden",
              height: "100vh",
              width: "100wh",
              display: "flex",
              flexDirection:"column",
              justifyContent: "space-between",
            }}
          >
            <Header/>
            <RoutesApp/>
          </Box>
        </ContextProvider>
      </BrowserRouter>
  );
}

export default App;
