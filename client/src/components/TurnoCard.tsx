export default function TurnoCard({prof,dia,hora}:any){
    return (
        <div>
            <h1>Profesional: {prof}</h1>
            <b>Día: {dia}</b>
            <b>Hora: {hora}</b>
            <button>Solicitar turno</button>
        </div>
    )
}