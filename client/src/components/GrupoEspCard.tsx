import { Link } from "react-router-dom";

export default function GrupoEspCard({nombre,url,photo}:any){
    const styledBg = {
        backgroundImage: `url(${photo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: photo? 'cover' : 'contain',
        outlineOffset: photo? '-8px' : '0px',
        width:  '200px',
        height: '150px',
        transition: '.2s',
      }
    return (
        <Link to={`/turnos/${url}`} style={styledBg}>
            <h1>{nombre}</h1>
        </Link>
    )
}