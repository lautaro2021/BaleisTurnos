import { Route, Router, Routes} from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Landing/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/Register" element = {<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
