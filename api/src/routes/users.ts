import * as types from '../types';
const { User } = require('../db');
const { DB_EMAIL} = process.env;

export const getAllUsers = async ():Promise<types.User[]> => {
    const allUsers = await User.findAll();
    return allUsers;
}

export const getUserById = async (id: string): Promise<types.User | string> =>{
    if(id){
        const user = User.findByPk(id);
        return user;
    }
    return "No se encontro usuario con ese id";
}

export const addNewUser = async (user: types.User): Promise<string> => {
    if(user.email === DB_EMAIL){
        await User.create({... user, admin: true});
    }else{
        await User.create(user)
    }
    return "Usuario creado con exito";
}

export const updateUserInfo = async (newUser: types.User): Promise<types.User | string> => {
    await User.update(newUser, {where: {id: newUser.id}});
    const modificatedUser = await User.findByPk(newUser.id);
    return modificatedUser ? modificatedUser : "No se encontro usuario";
    
}

export const deleteUser = async(id: string): Promise<types.User | string> => {
    const user = await User.destroy({where: {id}});
    return user ? user : "No se encontro el usuario";
}