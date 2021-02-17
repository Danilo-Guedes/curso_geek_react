import React from 'react';
import AdicionaFrutas from './AdicionaFrutas';
import Fruta from './Fruta';

const frutas = [
    {id: 1, nome: 'maracujá', quantidade: 5 },
    {id: 2, nome: 'laranja', quantidade: 9 }
]

const ListaFrutas = () => {

    return <div>

    
    <h1>Lista de Frutas</h1>
        
    <AdicionaFrutas />
    

    {frutas.map(fruta => {
        return <Fruta key={fruta.id} fruta={fruta} />
    })}

    </div>
}

export default ListaFrutas;