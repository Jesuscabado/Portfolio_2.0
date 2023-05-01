import './css/Proyectos.css'
import './css/Common.css';
const Proyectos = () => {
    return (
        <section id="portfolio" class="portfolio">
            <div class="contenido-seccion">
                <h2>Proyectos</h2>
                <div class="galeria">
                    <div class="proyecto">
                        <img src="img/Proyectos/MesaYRisa.png" href="https://github.com/Jesuscabado/proyecto_Backend" alt=""></img>
                        <div class="overlay">
                            <h3>Mesa y Risa</h3>
                            <p>Proyecto Backend</p>
                        </div>
                    </div>
                    <div class="proyecto">
                        <img src="img/Proyectos/Scrap_OverFlow.png" href="https://github.com/Jesuscabado/Scrap_OverFlow" alt=""></img>
                        <div class="overlay">
                            <h3>Scrap_overFlow</h3>
                            <p>proyecto de webScraping y testing</p>
                        </div>
                    </div>
                    {/* <div class="proyecto">
                        <img src="img/p1.jpg" href="https://github.com/Jesuscabado/Portfolio_2.0" alt=""></img>
                        <div class="overlay">
                            <h3>Portfolio 2.0</h3>
                            <p>Creacion de un portfolio propio</p>
                        </div>
                    </div> */}
                    <div class="proyecto">
                        <img src="img/Proyectos/Kultur_React.png" href="https://github.com/Jesuscabado/Kultur_React" alt=""></img>
                        <div class="overlay">
                            <h3>kultur_React</h3>
                            <p>Api de eventos en Bizkaia con React</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}






export default Proyectos;