
import './css/NavBar.css'
import './css/Common.css';
const NavBar = () => {
    const mostrarOcultarMenu = () => {//funcion para mostrar y ocultar el menu
        if(document.getElementById('nav').classList.contains('responsive')){//si tiene la clase responsive
            document.getElementById('nav').classList.remove('responsive');//remueve la clase responsive
        }else{
            document.getElementById('nav').classList.add('responsive');//si no tiene la clase responsive la agrega
        }
    }
    const ocultarMenu = () => {//funcion para ocultar el menu
        document.getElementById('nav').classList.remove('responsive');//remueve la clase responsive
    }

    return (
        <div className='contenedor-header'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
            <header>
                <div className='logo'>
                    <a href='#'>JC</a>
                </div>
                <nav id= 'nav'>
                    <ul>
                        <li className='NavBarBotton'>
                            <a href='#inicio'onClick={ocultarMenu}>INICIO</a>{/* //cuando se hace click en el boton se ejecuta la funcion ocultarMenu */}
                        </li>
                        <li className='NavBarBotton'>
                            <a href='#sobremi' onClick={ocultarMenu}>SOBRE MI</a>
                        </li>
                        <li className='NavBarBotton'>
                            <a href='#skills' onClick={ocultarMenu}>SKILLS</a>
                        </li>
                        <li className='NavBarBotton'>
                            <a href='#proyectos' onClick={ocultarMenu}>PROYECTOS</a>
                        </li>
                        <li className='NavBarBotton'>
                            <a href='#contacto' onClick={ocultarMenu}>CONTACTO</a>
                        </li>
                    </ul>
                </nav>
                <div className='nav-responsive'onClick={mostrarOcultarMenu}></div>{/* cuando se hace click en el boton se ejecuta la funcion mostrarOcultarMenu */}
                <i class="fa-duotone fa-bars-staggered"></i>         
         </header>
        </div>
    );
}

export default NavBar;
