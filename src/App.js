import './App.css';
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Skills from './components/Skills';
import Proyectos from './components/Proyectos';
import Contact from './components/Contacto';
import Footer from './components/Footer';
import './components/css/Common.css';


function App() {
  return (
    <div className="Portfolio">
      <NavBar />
      <section id='inicio'>
      <Inicio />
      </section>
      <section id='sobremi'>
      <SobreMi />
      </section>
      <section id='skills'>
      <Skills />
      </section>
      <section id='proyectos'>
      <Proyectos />
      </section>
      <section id='contacto'>
      <Contact />
      </section>
      <section id='footer'>
      <Footer />
      </section>
    </div>
  );
}

export default App;
