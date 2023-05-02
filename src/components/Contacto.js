import './css/Contacto.css'
import './css/Common.css';
const Contact = () => {
    return (
        <section id="contacto" className="contacto">
            <div className="contenido-seccion">
                <h2>CONTACTO</h2>
                <div className="fila">
                    <div className="col">
                        <input type="text" placeholder="Tú Nombre"></input>
                        <input type="text" placeholder="Número de teléfono"></input>
                        <input type="text" placeholder="Dirección de correo"></input>
                        <input type="text" placeholder="Tema"></input>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                        <button >
                            Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
                            <span className="overlay"></span>
                        </button>
                    </div>
                    <div className="col">
                        <div className="info">
                            <ul>
                                <li>
                                <i class="fa-regular fa-envelope"></i>
                                    <span>Email</span>
                                </li>
                                <li>
                                <i class="fa-brands fa-linkedin"></i>
                                    <span>LinkedIn</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
       