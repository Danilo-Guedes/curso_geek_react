import React, { useState, useEffect } from 'react';
import { Link , useParams} from 'react-router-dom';

function DetalhesUsuarios(){

    const { id } = useParams();

    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
        .then(resposta => resposta.json())        
        .then(dados => {           
                console.log(dados.data);
                if(dados.data){
                    setUsuario({
                        id: dados.data.id,
                        nome: dados.data.first_name,
                        sobrenome: dados.data.last_name,
                        email: dados.data.email,
                        foto: dados.data.avatar
                    })            
                }
        })
    }, [id])

    if(usuario.nome !== undefined){
        return <div>
               <h1>{`${usuario.nome} ${usuario.sobrenome}`}</h1>
               <img src={usuario.foto} alt={usuario.nome}/>
               <p>{usuario.email}</p>    
               <Link to='/usuarios'>Voltar</Link>
               </div>
    }else{
        return <div>
               <h1>Usuário não encontrado</h1>
               <Link to='/usuarios'>Voltar</Link>
               </div>
    }        
}
export default DetalhesUsuarios;