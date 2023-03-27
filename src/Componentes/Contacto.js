import React from 'react'

const Contacto = () => {
  return (
    <>
    <h1 style={{ textAlign: 'center', margin: '80px' }}> Contacto </h1>
    <div style={{ border: 'double 10px #f5f5db'  ,width: '800px' , height: '400px'   ,backgroundColor: '#a77dced8', padding: '30px'}} class= "cuadroContacto">
    <form role="form">
        <div class="form-group">
            <label for="name">Nombre y Apellido</label>
            <input type="name" class="form-control" id="name" />
        </div>
        <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input type="email" class="form-control" id="email" />
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Mensaje</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button style={{marginTop: 20}} type="button" class="btn btn-dark">Enviar</button>
        </form>
    </div>
    </>
  )
}

export default Contacto