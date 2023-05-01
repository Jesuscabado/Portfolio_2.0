
import './css/NavBar.css'
import './css/Common.css';
const NavBar = () => {
    const mostrarOcultarMenu = () => {
        if(document.getElementById('nav').classList.contains('responsive')){
            document.getElementById('nav').classList.remove('responsive');
        }else{
            document.getElementById('nav').classList.add('responsive');
        }
    }
    const ocultarMenu = () => {
        document.getElementById('nav').classList.remove('responsive');
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
                            <a href='#inicio'onClick={ocultarMenu}>INICIO</a>
                        </li>
                        <li className='NavBarBotton'>
                            <a href='#sobremi' onClick={ocultarMenu}>Sobre Mi</a>
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
                <div className='nav-responsive'onClick={mostrarOcultarMenu}></div>
                <i class="fa-light fa-bars"></i>           
         </header>
        </div>
    );
}

export default NavBar;
