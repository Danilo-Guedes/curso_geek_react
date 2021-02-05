import React, { Component } from 'react';
import './App.css';

import Comentario from './components/Comentario'

class App extends Component {

  state = {
    comentarios: [
      {
        nome: "Mestre",
        email: "mestre@mail.com",
        data: new Date(2021, 2, 4),
        mensagem:"Olá alguém quer TC?"
      },
      {
        nome: "Maria",
        email: "maria@mail.com",
        data: new Date(2021, 2, 4),
        mensagem:"Olá mestre tudo bem? de onde vc é?"
      }
    ]
  }

  adicionarComentario = () => {
    const novoComentario = {
      nome: "Pedro",
      email: "pedro@mail.com",
      data: new Date(),
      mensagem: "Salve Salve Pessoal!!!"
    }

    //FORMA TRADICIONAL DE SE FZ NO JS = ERRADA
    // let lista = this.state.comentarios;
    // lista.push(novoComentario);
    // this.setState({comentarios: lista});

    //FORMA MAIS MODERNA
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario]
    });

  }
  
  render(){ return (
    <div className="App">

      <h1>Meu projeto</h1>

      {this.state.comentarios.map((comentario, index) => (  //parenteses pq retorna direto
        // console.log(comentario);

        <Comentario 
            key={index}
            nome={comentario.nome} 
            email={comentario.email} 
            data={comentario.data}>
            {comentario.mensagem}
        </Comentario>       
      ))}     
      <button onClick={this.adicionarComentario}>Adicionar um Comentário</button>
    </div>
  )};
}

export default App;
