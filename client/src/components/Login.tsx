import React, {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {useAppDispatch} from '../config/config';
import { createUser} from '../redux/actions/index';
import { userRegister } from '../services/userFirebase';
import swal from 'sweetalert';

interface User {
  name: string,
  email: string,
}

function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      try {
        const userData: any = await userRegister(user.email, user.password)
        alert('perfil creado');
        dispatch(createUser({
          ...user,
          id: userData.user.uid,
        }))
        navigate('/login')
      } catch (error) {
          console.log(error);
      }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
      setUser({
        ...user,
        [e.target.name] : e.target.value,
      })
  }

  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <label>Email</label>
        <input type = "text" name ="email" value = {user.email} onChange = {handleChange}></input>

        <label>Contraseña</label>
        <input type = "password" name ="password" value = {user.password} onChange = {handleChange}></input>


        <button type = 'submit'>Logearse</button>
      </form>
    </div>
  )
}

export default Register