import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../config/config";
import { getAllUsers } from "../redux/actions";
import GrupoEspCard from "./GrupoEspCard";

export default function Home(){
    const dispatch = useAppDispatch();
    const allUsers = useSelector((state:any)=> state.allUsers)
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
    return(
        <div>
            <section>
                <h1>NUESTRAS ESPECIALIDADES</h1>
                <GrupoEspCard nombre="Cejas y pestañas" url='cejasypestanas' photo=''/>
                <GrupoEspCard nombre="Uñas" url='unas' photo=''/>
                <GrupoEspCard nombre="Otros" url='otros' photo=''/>
            </section>
            <section>
                <h1>NUESTROS PROFESIONALES</h1>
                {
                    allUsers.length && allUsers?.map((user:any) =>{
                        if(user.prof){
                            return (
                                <div>
                                    <img src={user.avatar} alt='user photo'/>
                                    <b>{user.name}</b>
                                </div>
                            )
                        }
                    })
                }
            </section>
        </div>
    )
}