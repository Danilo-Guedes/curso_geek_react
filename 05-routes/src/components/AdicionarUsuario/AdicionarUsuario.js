import React, { useState } from 'react'

import './AdicionarUsuario.css'

function AdicionarUsuario() {
  //useState deve ser utilizado como se fosse um constructor(), ou seja
  //deve ficar no escopo da função/componente e não pode ser declarado
  //de outra forma, ou em outra função, ou dentro de algum condicional if
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  
  const onSubmitHandler = event => {
    event.preventDefault()

    const usuario = { //usando objetc shorthand syntax
      nome,
      sobrenome,
      email
    }

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(usuario)
    })
      .then(resposta => {
        if(resposta.ok){
          alert(`Usuário ${usuario.nome} ${usuario.sobrenome} adicionado(a) com sucesso!`)
          setNome('');
          setSobrenome('');
          setEmail('');

        }
      })
  
  }

  return (
    <div className="AdicionarUsuario">
      <h2>Adicionar Usuário</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="Linha">
          <div className="Coluna">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={nome}
              onChange={event => setNome(event.target.value)}
              required
              autoComplete='off'>
            </input>
          </div>
          <div className="Coluna">
            <label>Sobrenome</label>
            <input
              type="text"
              name="sobrenome"
              value={sobrenome}
              onChange={event => setSobrenome(event.target.value)}
              required
              autoComplete='off'>
            </input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <button type="submit">
          Adicionar
      </button>
      </form>
    </div>
  )
}

export default AdicionarUsuario