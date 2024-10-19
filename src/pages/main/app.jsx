import React from 'react';
import './app.css';
import Header from '../../components/header/header';
import Button from '../../components/button/button';
import Footer from '../../components/footer/footer';
import { useTranslation } from 'react-i18next';
import Typewriter from '../../components/typewriter/typewriter';
import { Link as RouterLink } from 'react-router-dom';

function ExperienceItem({ date, title, description }) {
  return (
    <div className="experienceContainer">
      <div className="bulletDecorationContainer">
        <div className="bulletPoint"></div>
        <div className="bulletLine"></div>
      </div>
      <div className="experienceData">
        <p className="experienceDate">{date}</p>
        <h2 className="experienceTitle">{title}</h2>
        <p className="experienceText text16">{description}</p>
      </div>
    </div>
  );
}

function ProjectItem({ title, description, technologies, imgClass, img, gitHubLink, projectLink }) {
  return (
    <div className={`projectContainer ${imgClass}`}>
      <img src={`/img/home/${img}`} alt="" className="img" />
      <div className="infoContainer flexColumnCenter">
        <h2 className="title">{title}</h2>
        <p className="text16">{description}</p>
        <div className="links flex justify-center items-center gap-[10px]">
          <RouterLink to={gitHubLink} className='linkButton flex justify-center items-center' target='_Blank'>
            <img src="/img/header/gitHubIcon.svg" alt="" />
          </RouterLink>
          <RouterLink to={projectLink} className='linkButton flex justify-center items-center' target='_Blank'>
            <img src="/img/home/linkIcon.svg" alt="" />
          </RouterLink>
        </div>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <div key={index} className={`flex justify-center items-center ${tech.className}`}>
              <p>{tech.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Home() {
  const { t } = useTranslation();

  const experiences = [
    {
      date: t('EXPERIENCE_DATE_1'),
      title: t('EXPERIENCE_TITLE_1'),
      description: t('EXPERIENCE_DESCRIPTION_1'),
    },
    {
      date: t('EXPERIENCE_DATE_2'),
      title: t('EXPERIENCE_TITLE_2'),
      description: t('EXPERIENCE_DESCRIPTION_2'),
    },
  ];

  const projects = [
    {
      title: t('PROJECT_TITLE_1'),
      description: t('PROJECT_DESCRIPTION_1'),
      technologies: [
        { text: 'Tailwind', className: 'bg-[#44A8B3]' },
        { text: 'React', className: 'bg-[#53C1DE]' },
      ],
      img: 'infinite_galery.jpeg',
      gitHubLink: 'https://github.com/Martinsanchez06/Galery_infinite',
      projectLink: 'https://infinite-gallery-ms.netlify.app'
    },
  ];

  const techSkills = [
    { src: '/img/home/HTMLIcon.svg', alt: 'HTML' },
    { src: '/img/home/CSSIcon.svg', alt: 'CSS' },
    { src: '/img/home/JSIcon.svg', alt: 'JavaScript' },
    { src: '/img/home/TailwindIcon.svg', alt: 'Tailwind CSS' },
    { src: '/img/home/ReactIcon.svg', alt: 'React' },
    { src: '/img/home/NodeJSIcon.svg', alt: 'Node.js' },
    { src: '/img/home/SQLIcon.svg', alt: 'SQL' },
  ];

  const homeRoleText = t('HOME_ROLE');

  return (
    <div className="App" id="home">
      <Header />

      <section className="mainSectionHome maxWidth">
        <div className="textContainer flexColumnCenter">
          <h1 className="title">{t('HOME_GREETING')}</h1>
          {/* <h1 className="title">{t('HOME_ROLE')}</h1> */}
          <h1 className="title">
            <Typewriter text={homeRoleText} period={2000} className="typewrite" />
          </h1>
          <h2 className="titleH2">{t('HOME_SPECIALIZATION')}</h2>
        </div>
        <p className="secondaryText text24">
          {t('HOME_FRONTEND_DEVELOPER')}
        </p>
        <div className="mainSectionHomeButtonsContainer flexCenter">
          <Button text={t('HOME_CONTACT_ME')} link="/contact" blank={false} />
          <a
            href="/Martin_Sanchez_CV.pdf"
            className="button flexCenter downloadCV"
            download
          >
            <p>{t('HOME_DOWNLOAD_CV')}</p>
            <img src="/img/home/download.svg" alt={t('HOME_DOWNLOAD_CV')} />
          </a>
        </div>
      </section>

      <section
        className="experienceSectionContainter flexColumnCenter maxWidth section"
        id="experience"
      >
        <h1 className="text24M">
          <img src="/img/home/briefcase.svg" alt="" />
          {t('EXPERIENCE_TITLE')}
        </h1>
        <div className="experiencesMainContainter">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              date={exp.date}
              title={exp.title}
              description={exp.description}
            />
          ))}
        </div>
      </section>

      <section
        className="section flexColumnCenter maxWidth projectsSectionContainer"
        id="projects"
      >
        <h1 className="text24M">
          <img src="/img/home/tagsDeveloper.svg" alt="Proyectos" />
          {t('PROJECTS_TITLE')}
        </h1>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            img={project.img}
            technologies={project.technologies}
            gitHubLink={project.gitHubLink}
            projectLink={project.projectLink}
            imgClass={index % 2 === 1 ? 'second' : ''}
          />
        ))}
      </section>

      <section
        className="section flexColumnCenter maxWidth techStackSectionContainer"
        id="skills"
      >
        <h1 className="text24M">
          <img src="/img/home/BrainIcon.svg" alt="Habilidades Técnicas" />
          {t('TECHNICAL_SKILLS_TITLE')}
        </h1>
        <div className="technologiesSkills flexCenter">
          {techSkills.map((tech, index) => (
            <div className="techSKill" key={index}>
              <img src={tech.src} alt={tech.alt} />
            </div>
          ))}
        </div>
      </section>

      <section
        className="section flexColumnCenter maxWidth lastContactSectionContainer"
      >
        <h1 className="title">{t('READY_TO_TRANSFORM')}</h1>
        <p className="text24">{t('HELP_GROW')}</p>
        <div className="mainSectionHomeButtonsContainer flexCenter">
          <Button text={t('HOME_CONTACT_ME')} link="/contact" blank={false} />
          <a
            href="/Martin_Sanchez_CV.pdf"
            className="button flexCenter downloadCV"
            download
          >
            <p>{t('HOME_DOWNLOAD_CV')}</p>
            <img src="/img/home/download.svg" alt="Descargar CV" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
