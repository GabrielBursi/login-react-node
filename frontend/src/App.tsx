import { BrowserRouter } from 'react-router-dom';

import './styles/app.css'
import './styles/responsividade.css'

import RoutesApp from "./Routes";
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <main>
          <RoutesApp/>
        </main>
    </BrowserRouter>
  );
}

export default App;
