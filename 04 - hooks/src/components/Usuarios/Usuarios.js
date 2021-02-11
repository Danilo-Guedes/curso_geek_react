import React, { Component } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

class Usuarios extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usuarios: []
    }

    this.adicionarUsuario = this.adicionarUsuario.bind(this)
  }

  adicionarUsuario(usuario) {
    const usuarios = [...this.state.usuarios, usuario]
    this.setState({ usuarios: usuarios })
  }

  removerUsuario(usuario) {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      fetch(`https://reqres.in/api/users/${usuario.id}`, {
        method: 'DELETE'
      })
        .then(resposta => {
          if (resposta.ok){
            let usuarios = this.state.usuarios
            usuarios = usuarios.filter(x => x.id !== usuario.id)
            this.setState({ usuarios: usuarios })
          }
        })
    }
  }

  componentDidMount(){
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
          this.setState({usuarios: listaUsuarios})
        })
  }

  render() {
    return (
      <>
        <AdicionarUsuario adicionarUsuario={this.adicionarUsuario} />

        {this.state.usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={this.removerUsuario.bind(this, usuario)}
          />
        ))}
      </>
    )
  }
}

export default Usuarios