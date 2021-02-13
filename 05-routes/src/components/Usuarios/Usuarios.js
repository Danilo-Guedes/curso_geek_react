import React, { useState, useEffect } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

function Usuarios() {

  const [usuarios, setUsuarios] = useState([]);
  
  useEffect(() => {
    //FAZENDO UMA REQUISICAO "GET" NA API REQRES.IN
    fetch('https://reqres.in/api/users') //RETORNA UMA PROMISSE
      .then(resposta => resposta.json())
        .then(dados => {

          console.log(dados.data)

          const listaUsuarios = dados.data.map(usuario => {
            return {
              id: usuario.id,
              nome: usuario.first_name,
              sobrenome: usuario.last_name,
              email: usuario.email
            }
          })
          // console.log(listaDaApi);
          setUsuarios(listaUsuarios)

          console.log('useEfect...');
        })
  }, [])   //segundo parâmetro do useEffect é uma lista de dependencias, que no caso 
           //foi passado um array vazio para não gerar dependencia

  
  const removerUsuario = usuario => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      fetch(`https://reqres.in/api/users/${usuario.id}`, {
        method: 'DELETE'
      })
        .then(resposta => {
          if (resposta.ok){

            setUsuarios(usuarios.filter(x => x.id !== usuario.id))
            
          }
        })
    }
  }

  console.log('render...');

    return (
      <>
        {usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={() => removerUsuario(usuario)}
          />
        ))}
      </>
    )
}

export default Usuarios