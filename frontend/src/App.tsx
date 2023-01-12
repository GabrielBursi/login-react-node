import { BrowserRouter } from 'react-router-dom';

import './app.css'

import RoutesApp from "./Routes";
import Header from './components/Header';
import ValidateContextProvider from './context/ValidateContext';

function App() {
  return (
      <BrowserRouter>
        <ValidateContextProvider>
            <Header/>
            <main className='main'>
              <RoutesApp/>
            </main>
        </ValidateContextProvider>
      </BrowserRouter>
  );
}

export default App;
