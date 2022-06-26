import React, {useState} from "react"

const dados = require( "./banco.json")

const Exercicio02 = () => {
 //inicio o componente carregando a lista de cores   
const [ cores, setCores ] = useState( dados.lista ) //Nao precisava

const [ estilo, setEstilo] = useState( {backgroundColor: "grey"} ) //Sim pq existe alteração no estado do componente

const TrocarCor = (cor) => {
    setEstilo( { backgroundColor: cor } )
}

var tabela = cores.map( (item) => {
    return <li key={ item }
    style={{ cursor: "pointer "}}
        onClick={ () => TrocarCor(item) }
    >
    { item }
    </li>
})

    return (
        <div style={ estilo }>
            { tabela }
        </div>
    )
}

export default Exercicio02