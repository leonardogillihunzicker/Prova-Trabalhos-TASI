import React, {useState} from "react"
import axios from "axios"


const Exercicio10 = () => {

    const[ dadosTabela, setDadosTabela] = useState( [] )

    const handleText = ( e ) => {
        var valor = e.target.value


        var dados = tabelaOriginal.filter(linha => {
                return (linha.name.indexOf( valor ) > -1 || linha.body.indexOf( valor ) > -1 )
        })
        setDadosTabela ( dados )

    }

    const handleClick = async() => {
        var url = "https://viacep.com.br/ws/${dados}/json/"

        var data = await axios.get( url )
            .then( retorno => {
                return retorno.data
            })
            setDadosTabela( data )
        }

var tabela = dadosTabela.map( objeto => {
    return(
        <tr key={objeto.id}>
            <td>{ objeto.cep}</td>
            <td>{ objeto.endereco }</td>
            <td>{ objeto.complemento }</td>
            <td>{ objeto.bairro}</td>
            <td>{ objeto.cidade}</td>
            <td>{ objeto.uf}</td>
            <td>{ objeto.ddd}</td>
            <td>{ objeto.ibge}</td>
        </tr>
    )
})

        return(
            <div>
                <h1>Lista de Ceps</h1>
                
                <input type="button"
                        value="Carregar Ceps"
                        onClick={ () => { handleClick() }}
                />
                <br />

                <input type="text"
                    placeholder="Pesquisar"
                    onChange={ (e) => handleText(e) }
                />
                <table border = "1" >
                    <tr>
                        <td>CEP</td>
                        <td>Endereço</td>
                        <td>Complemento</td>
                        <td>Bairro</td>
                        <td>Cidade</td>
                        <td>UF</td>
                        <td>DDD</td>
                        <td>IBGE</td>
                    </tr>
                        { tabela }
                </table>
            </div>
        )
}

export default Exercicio10