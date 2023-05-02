import '../components/css/Skills.css'
import './css/Common.css';
const Skills = [
    {
      id : 1,
      name: 'HTML',
      image: 'img/skills/html.png',
      link: 'https://www.w3.org/html/',
      ProgressEvent: 80,
    },
    {
      id : 2,
      name: 'CSS',
      image: 'img/skills/css.png',
      link: 'https://www.w3.org/Style/CSS/Overview.en.html',
      ProgressEvent: 60,
    },
    {
        id : 3,
        name: 'JavaScript',
        image: 'img/skills/js.png',
        link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
        ProgressEvent: 40,
    },
    {
        id : 4,
        name: 'React',
        image: 'img/skills/react.png',
        link: 'https://es.reactjs.org/',
        ProgressEvent: 20,
    },
    {
        id : 5,
        name: 'Node',
        image: 'img/skills/nodejs.png',
        link: 'https://nodejs.org/es/',
        ProgressEvent: 40,
    },
    {
        id : 6,
        name: 'MongoDB',
        image: 'img/skills/mongo.webp',
        link: 'https://www.mongodb.com/es',
        ProgressEvent: 50,
    },
    {
        id : 7,
        name: 'Git',
        image: 'img/skills/git.png',
        link: 'https://github.com/Jesuscabado?tab=repositories',
        ProgressEvent: 80,
    },
    
    // Agrega las demás tecnologías aquí
  ];
  
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
                    <span>{skill.ProgressEvent}%</span>
                  </div>
                </li>
              ))}
            </ul>
        </div>
      </section>
    
    );
  };


export default SkillsList;
