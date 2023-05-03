import '../components/css/Skills.css'
import './css/Common.css';
const Skills = [
    {
      name: 'HTML',
      image: 'img/skills/html.png',
      link: 'https://www.w3.org/html/',
      ProgressEvent: 80,
    },
    {
      name: 'CSS',
      image: 'img/skills/css.png',
      link: 'https://www.w3.org/Style/CSS/Overview.en.html',
      ProgressEvent: 60,
    },
    {
        name: 'JavaScript',
        image: 'img/skills/js.png',
        link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
        ProgressEvent: 40,
    },
    {
        name: 'React',
        image: 'img/skills/react.png',
        link: 'https://es.reactjs.org/',
        ProgressEvent: 20,
    },
    {
        name: 'Node',
        image: 'img/skills/nodejs.png',
        link: 'https://nodejs.org/es/',
        ProgressEvent: 40,
    },
    {
        name: 'MongoDB',
        image: 'img/skills/mongo.webp',
        link: 'https://www.mongodb.com/es',
        ProgressEvent: 50,
    },
    {
        name: 'Git',
        image: 'img/skills/git.png',
        link: 'https://github.com/Jesuscabado?tab=repositories',
        ProgressEvent: 80,
    },
    
    // Agrega las demás tecnologías aquí
  ];
  
  //constante que cree un ID para cada skill
    const SkillsList = () => {
      return (
        <section className="skills" id="skills">
          <div className="contenido-seccion">
            <h2>Skills</h2>
            <div className="fila"></div>
              <ul className="col">
                {Skills.map((skill, index) => (
                  <li className="skill"key={index}>
                    <a href={skill.link}>
                      <img className ="iconoSkill"src={skill.image} alt={skill.name} />
                    </a>
                    <div className="barra-skill">
                      <div className="progreso" style={{ width: `${skill.ProgressEvent}%` }}></div>
                  <span className={skill.name}>{skill.ProgressEvent}%</span>
                </div> 
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default SkillsList;
