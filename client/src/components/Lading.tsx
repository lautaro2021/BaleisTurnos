import React from 'react';
import {Link} from 'react-router-dom';

function Lading() {
  return (
    <div>
        <Link to = "/login">
            <button>Logearse</button>
        </Link>
        <Link to = "/register">
            <button>Registrarse</button>
        </Link>
    </div>
  )
}

export default Lading