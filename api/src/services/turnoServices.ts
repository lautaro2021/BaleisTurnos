import * as types from '../types';
const { Turno } = require('../db')

export const getAllTurnos = async ()=>{
    const allTurnos = await Turno.findAll()
    return allTurnos
}
export const getTurnoById = async (id:string)=>{
    const turno = await Turno.findByPk(id)
    if(turno){
        return turno
    }else{
        return "No se ha podido encontrar el turno"
    }
}
export const addNewTurno = async (turnoData:types.Turno)=>{
    await Turno.create(turnoData)
    return 'Turno creado con éxito'
}
export const solicitedTurno = async (idTurno:string,idUser:string)=>{
    await Turno.update({solicited: true, UserId: idUser}, {where: {id: idTurno}})
    let turno = await Turno.findByPk(idTurno)
    if(turno?.solicited){
        return 'Turno solicitado con éxito'
    }else{
        return 'No se ha podido solicitar el turno'
    }
}
export const updateTurno = async (idTurno:string, newTurno:types.Turno)=>{
    await Turno.update(newTurno, {where: {id: idTurno}})
    return 'Turno modificado con éxito'
}
export const deleteTurno = async (idTurno:string)=>{
    await Turno.destroy({where: {id: idTurno}})
    return 'Turno eliminado con éxito'
}