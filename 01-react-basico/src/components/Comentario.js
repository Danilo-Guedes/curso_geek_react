import React from 'react';
import './Comentario.css';

const Comentario = (props) => ( //parenteses está encapsulando o retorno html

    //JSX
    <div className='Comentario'>
        <h2>{props.nome} disse:</h2>
        <p>{props.mail}</p>
        <p>{props.children}</p>
        <p>{props.data.toDateString()}</p>
        <button onClick={props.onRemove} >&times;</button>
    </div>

);

export default Comentario;

