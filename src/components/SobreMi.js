import './css/SobreMi.css'
import './css/Common.css';
const SobreMi = () => {

    return (
        <section id="sobremi" class="sobremi">
        <div class="contenido-seccion">
            <h2>Sobre Mí</h2>
            <p><span>Hola, soy Jesús Cabado.</span> Iniciandome en el mundo del desarrollo web. </p>

            <div class="fila">
                <div class="col">
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
                <div class="col">
                    <h3>Aficiones</h3>
                    <div class="contenedor-intereses">
                        <div class="interes">
                            <i class="fa-solid fa-gamepad"></i>
                            <span>JUEGOS</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-film"></i>
                            <span>CINE</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-book"></i>
                            <span>LIBROS</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-headphones"></i>
                            <span>MUSICA</span>
                        </div>
                       
                    </div>
                </div>
            </div>
            <br></br>
            <button>
                Descargar CV <i class="fa-solid fa-download"></i>
                <span class="overlay"></span>
            </button>
        </div>
    </section>
            );
}

export default SobreMi;