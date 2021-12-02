import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import Tabela from './Tabela'

const App = () => {

  const [ nome, setNome ] = useState('')
  const [ telefone, setTelefone ] = useState('')
  const [ ativo, setAtivo ] = useState('')

  const [ dados, setDados ] = useState([])
  const [ copiaDados, setCopiaDados ] = useState( [] )

  const colunas = [ "Nome", "Telefone", "Ativo", "Remover" ]

  const [ textoFiltro, setTextoFiltro ] = useState("")

  const alimentaTabela = () => {
    var data = {
      nome: nome,
      telefone,
      ativo
    }

    setDados( [ ...dados, data ] )
  }

  const Remover = ( nome ) => {
    var lista = dados.filter( item => {
      return (item.nome != nome )?(item):("")
    })

    setDados( lista )
  }

const filtrar = ( event ) => {

    setTextoFiltro( event.target.value )

    var temp = dados.filter( item => {      

      if ( item.title.indexOf(textoFiltro) > -1 )
        return item
      else {

        if (item.nome == textoFiltro)
          return item
      }
    })

    setCopiaDados( temp )
  }

  var cor = "blue"

  var conteudoTabela = copiaDados.map( (linha, indice) => {
      if ( cor === "blue" )
        cor = "lime"
      else
        cor = "violet"

      return <tr style={{ backgroundColor: cor }}>
                <td><Text>{ linha.nome }</Text></td>
                <td><Text>{ linha.telefone }</Text></td>
                <td><Text>{ linha.ativo }</Text></td>
              </tr>
  })

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ backgroundColor: "tomato", flex: 1 }}>
        <Text>Nome: </Text> 
        <TextInput 
          style={{ borderStyle: "solid", borderWidth: 1, borderColor: "#000", backgroundColor: "#ccc" }}
          value={ nome }
          onChange={ (e) => setNome( e.target.value )}
        />


        <Text>Telefone: </Text>
        <TextInput 
          style={{ borderStyle: "solid", borderWidth: 1, borderColor: "#000", backgroundColor: "#ccc" }}
          value={ telefone }
          onChange={ (e) => setTelefone( e.target.value )}
        />

        <Text>Ativo: </Text>
        <TextInput 
          style={{ borderStyle: "solid", borderWidth: 1, borderColor: "#000", backgroundColor: "#ccc" }}
          value={ ativo }
          onChange={ (e) => setAtivo( e.target.value )}
        />
        
        <Button title={ "Incluir "} onPress={ () => alimentaTabela() }/>
      </View>

      <View style={{ flex: 2 }} >
        <Tabela colunas={ colunas } linhas={ dados } aoClicar={ Remover } />
      </View>
    </View>
  )
}

export default App