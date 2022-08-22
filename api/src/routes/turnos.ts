// import express from "express";
import { Router } from "express";
import { addNewTurno, getAllTurnos, getTurnoById } from "../services/turnoServices";
const router = Router()

router.get('/:id',async (req,res)=>{
    //Obtiene todos los turnos, y si le pasan ID por params obtiene solo uno
    const id = req.params.id
    let allTurnos;
    try {
        if(id){
            allTurnos = await getTurnoById(id)
        }else{
            allTurnos = await getAllTurnos()
        }
        res.json(allTurnos)
    } catch (error) {
        
    }
})
router.post('/',async (req,res)=>{
    //Recibe datos por body y los envia a la funcion
    const newTurno = req.body
    try {
        let response = await addNewTurno(newTurno)
        res.send(response)
    } catch (error) {
        
    }
})