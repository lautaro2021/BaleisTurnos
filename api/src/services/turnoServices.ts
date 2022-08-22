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
export const addNewTurno = async (turnoData:any)=>{
    await Turno.create(turnoData)
    return 'Turno creado con éxito'
}
export const solicitedTurno = async (idTurno:string)=>{
    await Turno.update({solicited: true}, {where: {id: idTurno}})
    return 'Turno solicitado con éxito'
}
export const updateTurno = async (idTurno:string, newTurno:any)=>{
    await Turno.update(newTurno, {where: {id: idTurno}})
    return 'Turno modificado con éxito'
}