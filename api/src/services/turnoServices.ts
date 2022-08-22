const { Turno } = require('../db')

export const getAllTurnos = async ()=>{
    const allTurnos = await Turno.findAll()
    return allTurnos
}
export const getTurnoById = async (id:string)=>{
    const turno = await Turno.findByPk(id)
    return turno
}
export const addNewTurno = async (turnoData:any)=>{
    await Turno.create(turnoData)
    return 'Turno creado con éxito'
}