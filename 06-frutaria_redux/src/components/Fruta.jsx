import React from 'react';

const Fruta = ({fruta}) => {  // descontruiu o props.fruta ao invés de usar o props 
    return <div className='fruta'>
        <ul>
            <li>
            <strong>Fruta: </strong> {fruta.nome}
            </li>
            <li>
            <strong>Quantidade: </strong> {fruta.quantidade}
            </li>
        </ul>
        <button onClick={() => alert(`fruta ${fruta.nome} removida`)}>Remover Fruta</button>


    </div>
}

export default Fruta;