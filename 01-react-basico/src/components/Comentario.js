import React from 'react';
import './Comentario.css';
import userPng from './user.png';

const Comentario = (props) => { //teses está encapsulando o retorno html

    //EXISTE ESSA POSSIBILIDADE DE FAZER O CSS DO COMPONETE e passar ele como style no html
    // const estilo = {  
    //     color: 'red',
    //     padding: '10px',
    //     fontSize: "30px"
    // }

    //JSX <<<<<<<<<<
    return <div className='Comentario'>
                <img class="avatar" src={userPng} alt={props.nome} />
                <div class="conteudo">
                    <h2 class="nome">{props.nome} disse:</h2>
                    <p class="email">{props.email}</p>
                    <p class="mensagem">{props.children}</p>
                    <p class="data">{props.data.toDateString()}</p>
                    <button class="closebtn" onClick={props.onRemove} >&times;</button>
                </div>
            </div>

};

export default Comentario;

