import './app.css';
import ContactForm from '../../components/form/contactForm/contactForm';
import Header from '../../components/header/header';

function Home() {

  const projects = [
    {
      title: "Calculator App",
      description: "A simple calculator application that performs basic arithmetic operations like addition, subtraction, multiplication, and division. Built with vanilla JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "To-Do List App",
      description: "A simple to-do list application where users can add, edit, and delete tasks. Built with vanilla JavaScript for DOM manipulation.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Weather App",
      description: "A web application that fetches and displays real-time weather data from an API. Users can search for the weather in different cities.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
    },
    {
      title: "E-commerce Product Page",
      description: "A mock product page for an e-commerce site, including features like product details, image gallery, and an interactive cart.",
      technologies: ["React", "CSS", "JavaScript"],
    }
  ];


  const Project = ({ title, description, technologies }) => (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Technologies:</strong> {technologies.join(', ')}</p>
    </div>
  );


  return (
    <div className="App">
      <Header />
      <section className='landingSectionMaincontainer'>
        <div className='landingSectionMyInfoContainer'>
          <img src="/img/manIcon.svg" alt="" className='landingMyImg'/>
          <p className='landingMainText'>Hi there!</p>
          <p className='landingMainText'>My name is <span>Martin Sanchez</span></p>
        </div>
        <div>
          <p className='landingSecondText'>A front end developer</p>
          <p className='landingSecondText'>specialised in React</p>
        </div>
      </section>
      <section>
        <h2>Featured proyects</h2>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </section>
      <section>
        <ContactForm  />
      </section>
    </div>
  );
}

export default Home;
