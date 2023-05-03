import './css/Proyectos.css'
import './css/Common.css';
const Proyectos = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="contenido-seccion">
                <h2>Proyectos</h2>
                <div className="galeria">
                    <div className="proyecto">
                        <img src="img/Proyectos/MesaYRisa.png" alt=""></img>
                        <div className="overlay">
                            <h3>Mesa y Risa</h3>
                            <p>Proyecto Backend</p>
                        </div>
                        <a href="https://github.com/Jesuscabado/proyecto_Backend" target="_blank" className="overlay"></a>
                    </div>
                    <div className="proyecto">
                        <img src="img/Proyectos/Scrap_OverFlow.png"  alt=""></img>
                        <div className="overlay">
                            <h3>Scrap_overFlow</h3>
                            <p>proyecto de webScraping y testing</p>
                        </div>
                        <a href="https://github.com/Jesuscabado/Scrap_OverFlow" target="_blank" className="overlay"></a>
                    </div>
                    <div className="proyecto">
                        <img src="img/Proyectos/Portfolio_2.0.png"  alt=""></img>
                        <div className="overlay">
                            <h3>Portfolio 2.0</h3>
                            <p>Creacion de un portfolio propio</p>
                        </div>
                        <a href="https://github.com/Jesuscabado/Portfolio_2.0" target="_blank" className="overlay"></a>
                    </div>
                    <div className="proyecto">
                        <img src="img/Proyectos/Kultur_React.png"  alt=""></img>
                        <div className="overlay">
                            <h3>kultur_React</h3>
                            <p>Api de eventos en Bizkaia con React</p>
                        </div>
                        <a href="https://github.com/Jesuscabado/Kultur_React" target="_blank" className="overlay"></a>
                    </div>
                </div>
            </div>
        </section>
    )
}






export default Proyectos;