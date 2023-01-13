import { BrowserRouter } from 'react-router-dom';

import './app.css'

import RoutesApp from "./Routes";
import {Header} from './components';
import { ContextProvider } from './context';

function App() {
  return (
      <BrowserRouter>
        <ContextProvider>
            <Header/>
            <main className='main'>
              <RoutesApp/>
            </main>
        </ContextProvider>
      </BrowserRouter>
  );
}

export default App;
