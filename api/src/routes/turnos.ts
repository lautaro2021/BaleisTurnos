// import express from "express";
import { Router } from "express";
import { addNewTurno, deleteTurno, getAllTurnos, getTurnoById, solicitedTurno, updateTurno } from "../services/turnoServices";
const router = Router()

router.get('/',async (_req,res)=>{
    //Obtiene todos los turnos, y si le pasan ID por params obtiene solo uno
    try {
        const allTurnos = await getAllTurnos()
        res.json(allTurnos)
    } catch (error) {
        console.log(error)
    }
})
router.get('/:id',async (req,res)=>{
    //Obtiene todos los turnos, y si le pasan ID por params obtiene solo uno
    const id = req.params.id
    try {
        const turnoById = await getTurnoById(id)
        res.json(turnoById)
    } catch (error) {
        console.log(error)
    }
})
router.post('/',async (req,res)=>{
    //Recibe datos por body y los envia a la funcion
    const newTurno = req.body
    try {
        let response = await addNewTurno(newTurno)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})
router.put('/solicited/:id',async (req,res)=>{
    //Recibe datos por body y los envia a la funcion
    const id = req.params.id
    try {
        let response = await solicitedTurno(id)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})
router.put('/update/:id',async (req,res)=>{
    //Recibe datos por body y los envia a la funcion
    const id = req.params.id
    const turnoUpdate = req.body
    try {
        let response = await updateTurno(id, turnoUpdate)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})
router.delete('/:id',async (req,res)=>{
    //Recibe datos por body y los envia a la funcion
    const id = req.params.id
    try {
        let response = await deleteTurno(id)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router