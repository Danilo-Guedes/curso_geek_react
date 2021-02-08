import React from 'react';
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';  

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
                <img className="avatar" src={userPng} alt={props.nome} />
                <div className="conteudo">
                    <h2 className="nome">{props.nome} disse:</h2>
                    <p className="email">{props.email}</p>
                    <p className="mensagem">{props.children}</p>
                    <p className="data">{formatRelative(props.data, new Date(), {locale: ptBR})}</p>
                    <button className="closebtn" onClick={props.onRemove} >&times;</button>
                </div>
            </div>

};

export default Comentario;

