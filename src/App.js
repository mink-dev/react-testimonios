
import './App.css';
import Testimonio from './componentes/Testimonio';
import Testimonios from './modulos/testimonios';

function App() {
 
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {
          Testimonios.map(element => (
            
            <Testimonio 
              nombre={element.nombre}
              pais={element.pais}
              imagen={element.imagen}
              cargo={element.cargo}
              empresa={element.empresa}
              testimonio={element.testimonio}
              texto_negrita={element.texto_negrita}
              alt={element.alt}
            />
             
          ))
        }
       
      
      </div>
    </div>
  );
}

export default App;
