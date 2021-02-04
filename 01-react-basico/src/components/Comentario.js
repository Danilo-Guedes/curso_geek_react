import React from 'react';
import './Comentario.css';

const Comentario = (props) => (

    //JSX
    <div className='Comentario'>
        <h2>{props.nome} disse:</h2>
        <p>{props.mail}</p>
        <p>{props.children}</p>
        <p>{props.data.toDateString()}</p>
    </div>

);

export default Comentario;