import React, {useState} from "react"
import axios from "axios"

import Form from "./form2"

const Exercicio05 = () => {

    const[ dadosTabela, setDadosTabela] = useState( [] )
    const[ tabelaOriginal, setTabelaOriginal ] = useState([])
    const[ mostraForm, setMostraForm ] = useState( false )
    const[ comment, setComment ] = useState([])

    const handleText = ( e ) => {
        var valor = e.target.value


        var dados = tabelaOriginal.filter(linha => {
                return (linha.name.indexOf( valor ) > -1 || linha.body.indexOf( valor ) > -1 )
        })
        setDadosTabela ( dados )

    }

    const handleClick = async() => {
        var url = "https://jsonplaceholder.typicode.com/comments?postId=${dados}"

        var data = await axios.get( url )
            .then( retorno => {
                return retorno.data
            })
            setDadosTabela( data )
            setTabelaOriginal( data )
        }

    const handleUpdate = ( objeto ) => {
        setMostraForm( !mostraForm )
        setComment( objeto )
    }
var tabela = dadosTabela.map( objeto => {
    return(
        <tr key={objeto.id}>
            <td>{ objeto.postId}</td>
            <td>{ objeto.name }</td>
            <td>{ objeto.email }</td>
            <td>{ objeto.body}</td>
            <td style = {{ cursor: "pointer"}}
                onClick = { () => handleUpdate ( objeto ) }
            > ✏️</td>
        </tr>
    )
})

        return(
            <div>
                <h1>Lista de comentarios</h1>
                
                <input type="button"
                        value="Carregar comentarios"
                        onClick={ () => { handleClick() }}
                />
                <br />

                <input type="text"
                    placeholder="Pesquisar"
                    onChange={ (e) => handleText(e) }
                />
                <Form ativo={ mostraForm } comentario={ comment }/>
                <table border = "1" >
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>E-mail</td>
                        <td>Comentario</td>
                        <td>Opções</td>
                    </tr>
                        { tabela }
                </table>
            </div>
        )
}

export default Exercicio05