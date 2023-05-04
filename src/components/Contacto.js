import React, { useState } from 'react';
import './css/Contacto.css'
import './css/Common.css';

const Contact = () => {
  const [enviado, setEnviado] = useState(false);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleEnviar = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    setEnviado(true);
  }

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  }
//no se puede poner mas de 9 numeros ni letras
  const handleTelefonoChange = (e) => {
    let value = e.target.value;
    //
    if (value.length > 9) {
      value = value.slice(0, 9);
    }
    setTelefono(value);
  }

  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2>CONTACTO</h2>
        {enviado ? (
          <div>
            <p>Gracias por contactarnos, {nombre}!</p>
          </div>
        ) : (
          <div className="fila">
            <div className="col">
              <form onSubmit={handleEnviar}>
                <input type="text" placeholder="Tú Nombre" value={nombre} onChange={handleNombreChange}></input>
                <input type="text" placeholder="Número de teléfono" value={telefono} onChange={handleTelefonoChange}></input>
                <input type="text" placeholder="Dirección de correo"></input>
                <input type="text" placeholder="Tema"></input>
                <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <button>
                  Enviar Mensaje
                  <br></br>
                  <i className="fa-solid fa-paper-plane"></i>
                  <span className="overlay"></span>
                </button>
              </form>
            </div>
            <div className="col">
              <div className="info">
                <ul>
                  <li>
                    <i className="fa-regular fa-envelope"></i>
                    <span>Email</span>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact;
