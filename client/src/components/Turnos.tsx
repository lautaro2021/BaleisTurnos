import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../config/config"
import { getAllTurnos } from "../redux/actions"
import TurnoCard from "./TurnoCard"

export default function Turnos({especialidad}:any){
    const dispatch = useAppDispatch()
    const allTurnos = useSelector((state:any)=> state.allTurnos)
    console.log(allTurnos)
    useEffect(()=>{
        dispatch(getAllTurnos())
    },[])
    return (
        <div>
            <h1>Turnos disponibles</h1>
            {
                allTurnos?.map((turno:any)=>{
                    if(turno.tipo === especialidad && !turno.solicited){
                        return (
                            <TurnoCard prof={turno.prof} dia={turno.dia} hora={turno.hora}/>
                        )
                    }
                })
            }
        </div>
    )
}