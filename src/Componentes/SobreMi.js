import React from 'react'
import Sobremi from '../imagenes/sobre mi.jpeg'
import Sobremi1 from '../imagenes/sobre mi (2).jpeg'

const SobreMi = () => {
  return (
    <div>
      <h1 class="text-center p-2">¿Quién soy?</h1>
        <div class="cuadro-sb">
        <img style={{padding: '10px' ,width: '500px' ,height: '600px'}} class="sobremi" src={Sobremi}></img>
            <h4 style={{ color: '#f5f5db' }}>
            Hola me llamo Guadalupe. Te invito a conocer  los productos con los que trabajamos, hablo en plural porque    detrás de éste emprendimiento hay mucho amor, personas que me ayudan dándome una mano siempre.Este    emprendimiento nace por decisiones que uno tiene que tomar en la vida. Soy feliz trabajando aquí.
            </h4>
        </div>
        <h1 class="text-center p-2">¿Que encontrarás?</h1>
          <div class="cuadro-sb">
          <img style={{padding: '20px' ,width: '500px' ,height: '600px'}} class="sobremi" src={Sobremi1}></img>
            <h4 style={{ color: '#f5f5db' }}>
              Vas a encontrar muchos productos con muy buena calidad y al mejor precio, tenemos a disposición artículos para decorar y organizar tu hogar, cuidado y uso personal.
            </h4>
          </div>
    </div>
  )
}

export default SobreMi
