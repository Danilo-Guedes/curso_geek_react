import './App.css';

import Comentario from './components/Comentario'

function App() {
  return (
    <div className="App">

      <h1>Meu projeto</h1>
      <Comentario nome="Mestre" email="mestre@mail.com" data={new Date(2021, 2, 4)}>
        Olá alguém quer TC?
      </Comentario>

      <Comentario nome="Maria" email="maria@mail.com" data={new Date(2021, 2, 6)}>
        Oi Mestre, de onde você é?
      </Comentario>
     
       
    </div>
  );
}

export default App;
