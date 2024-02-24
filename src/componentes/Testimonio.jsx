import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
    // Dividir el testimonio en dos partes: antes y después de la parte que quieres resaltar
    const partesTestimonio = props.testimonio.split(props.texto_negrita);
   
    // Renderizar cada parte con el formato adecuado
    const testimonioConNegrita = (
        <>
            {partesTestimonio[0]} {/* Primera parte del testimonio */}
            <strong>{props.texto_negrita}</strong> {/* Parte que quieres resaltar en negrita */}
            {partesTestimonio[1]} {/* Segunda parte del testimonio */}
        </>
    );

    return (
        <div className='contenedor-testimonio'>
            <img 
                className='imagen-testimonio' 
                src={(props.imagen === 'mink-dev') ? require(`../imagenes/testimonio-${props.imagen}.jpg`) : require(`../imagenes/testimonio-${props.imagen}.png`)}
                alt={'Foto de ' + props.alt} />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className='cargo-testimonio'>
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className='texto-testimonio'>{testimonioConNegrita}</p>
            </div>
        </div>
    );
}

export default Testimonio;