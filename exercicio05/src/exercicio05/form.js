import React, {useState, useEffect} from "react"

const Form = ({ ativo, comentario }) => {
    const[ nome, setNome ] = useState("")
    const[ comment, setComment ] = useState("")
    const[ email, setEmail ] = useState("")

    useEffect( () => {
        setNome( comentario.name)
        setComment( comentario.body)
        setEmail( comentario.email)
    }, [ativo] )
    
const AlteraNome = (e) => {
    setNome( e.target.value )
}

    var formulario = ( !ativo ) ? ("") : (
        <div style = {{ background: "violet", padding: "10px"}}>
        <h2> Alteração de comentarios</h2>
        <span>Nome</span>
        <input type= "text"  value ={ nome } 
        onChange= { (e) => AlteraNome(e) }        
        />

        <span>Comentarios</span>
        <input type = "text" value ={ comment } onChange={ (e) => { setComment( e.target.value) }}/> 

        <span>Email</span>
        <input type = "text" value ={ email }/>

    </div>
    )
    return (
      <div>
         { formulario }
      </div>
    )
}



export default Form