import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../config/config';
import {useSelector } from 'react-redux';

interface User {
  name: string,
  email: string,
  password: string,
  phone: string,
}

function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    email: "",
    password: "",
    avatar: "",
    name: "",
    phone: "",
  });

  function handleChange(e){
      
  }
  return (
    <div>
      <form>
        <label>Avatar</label>
        <input type="url" name = "avatar" value = {user.avatar}></input>

        <label>Email</label>
        <input type="text" name = "email" value = {user.email}></input>

        <label>Contraseña</label>
        <input type="password" name = "password" value = {user.password}></input>

        <label>Nombre</label>
        <input type="text" name = "name" value = {user.name}></input>

        <label>Telefono</label>
        <input type="number" name = "phone" value = {user.phone}></input>
      </form>
    </div>
  )
}

export default Register