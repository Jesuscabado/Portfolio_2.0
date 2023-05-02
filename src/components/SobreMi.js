import './css/SobreMi.css'
import './css/Common.css';
const SobreMi = () => {

    return (
        <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
            <h2>Sobre Mí</h2>
            <p><span>Hola, soy Jesús Cabado.</span> Iniciandome en el mundo del desarrollo web. </p>

            <div className="fila">
                <div className="col">
                    <h3>Datos Personales</h3>
                    <ul>
                        <li>
                            <strong>Email</strong>
                            <span>jesuscabado@hotmail.com</span>
                        </li>
                        <li>
                            <strong>Cargo</strong>
                            <span>Estudiante</span>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Aficiones</h3>
                    <div className="contenedor-intereses">
                        <div className="interes">
                            <i className="fa-solid fa-gamepad"></i>
                            <span>JUEGOS</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-film"></i>
                            <span>CINE</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-book"></i>
                            <span>LIBROS</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-headphones"></i>
                            <span>MUSICA</span>
                        </div>
                       
                    </div>
                </div>
            </div>
            <br></br>
            <button>
                Descargar CV <i className="fa-solid fa-download"></i>
                <span className="overlay"></span>
            </button>
        </div>
    </section>
            );
}

export default SobreMi;