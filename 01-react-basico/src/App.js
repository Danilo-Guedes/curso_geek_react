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
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  digitacaoCampos = evento => {

    const {name, value} = evento.target; 

    this.setState({
      novoComentario: {...this.state.novoComentario, [name]: value}
    });
  }

  adicionarComentario = evento => {

    //FORMA TRADICIONAL DE SE FZ NO JS = ANTIGA - EVITAR
    // let lista = this.state.comentarios;
    // lista.push(novoComentario);
    // this.setState({comentarios: lista});
    
    //FORMA MAIS MODERNA USANDO REST/SPREAD
    // this.setState({
    //   comentarios: [...this.state.comentarios, novoComentario]
    // });

    evento.preventDefault(); //Anula o eveto de submit

    const novoComentario = {...this.state.novoComentario, data: new Date()} //adicionando a data no objeto

    this.setState({comentarios: [...this.state.comentarios, novoComentario], //adicionando o novo coment na lista de comentarios
                  novoComentario: { nome: '', email: '', mensagem: ''}//zerando os valores do form spós o submit         
    }) 
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({comentarios: lista})
  }
  
  render(){ return (
    <div className="App">

      <h1>Chat do Dev Gué</h1>

      {this.state.comentarios.map((comentario, index) => (  //parenteses pq retorna direto
        // console.log(comentario);

        <Comentario 
            key={index}
            avatar={comentario.avatar}
            nome={comentario.nome} 
            email={comentario.email} 
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}//bind serve para relacionar o this da função a um objeto ou variável
            > 
            {comentario.mensagem}
        </Comentario>       
      ))}     
      
      <div>
        <form type="post" onSubmit={this.adicionarComentario} className="formulario">
        <h2>Adicionar um Comentário</h2>
          <div>
            <input 
              type='text'
              name='nome'
              value={this.state.novoComentario.nome}
              placeholder='Digite seu nome'
              onChange={this.digitacaoCampos}        
              autoComplete='off'  
              required
            />
          </div>
          <div>
            <input 
              type='email'
              name='email'
              value={this.state.novoComentario.email}
              placeholder='Digite seu nome'
              onChange={this.digitacaoCampos}
              autoComplete='off'  
              required
            />
          </div>
          <div>
            <textarea 
                name="mensagem" 
                placeholder="Escreva sua mensagem" 
                value={this.state.novoComentario.mensagem}
                rows="4" 
                onChange={this.digitacaoCampos}
                autoComplete='off' 
                required
              >
                        
            </textarea>
          </div>
          <div>
            <button type="submit">Adicionar um comentário</button>
          </div>
          
        </form>
        
      </div>


    </div>
  )};
}

export default App;
