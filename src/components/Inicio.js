
import './css/Inicio.css'
import './css/Common.css';
const Inicio = () => {
    return (
        <section id='inicio' className='inicio'>
            <link rel="icon" type="im" href="https://img.icons8.com/?size=512&id=19602&format=png"/>
            <div className='contenido-banner'>
                <div className='contenedor-img'>
                    <img src='img/MisFotos/MiFoto.png' alt='foto' />
                </div>

            <h1>Jesús Cabado</h1>
            <h2>Fullstack developer en desarrollo</h2>
            <section>
            <div className="redes">
                <a className="iconos"href="https://www.linkedin.com/in/jes%C3%BAs-cabado-edesa-302b0a137/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </div>
            </section>
            </div>
        </section>

    )
}

export default Inicio;