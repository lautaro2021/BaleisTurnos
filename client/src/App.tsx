import { Route, Router, Routes} from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';
import Home from './components/Home';
import Turnos from './components/Turnos';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Landing/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/Register" element = {<Register/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path='/turnos'>
          <Route path='cejasypestanas' element={<Turnos especialidad='cejasypestañas'/>}/>
          <Route path='unas' element={<Turnos especialidad='uñas'/>}/>
          <Route path='otros' element={<Turnos especialidad='otros'/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
