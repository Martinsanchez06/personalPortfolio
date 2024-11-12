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

function ProjectItem({ title, description, technologies, imgClass, img, gitHubLink, projectLink, inProgress }) {
  const { t } = useTranslation();

  return (
    <div className={`projectContainer ${imgClass} ${inProgress ? "inProgress" : ""}`}>
      <div className="img imgContainer">
        <img src={`/img/projects/${img}`} alt="" className="img" />
        <div className={`hoverIamge ${inProgress ? "active" : "false"}`}></div>
      </div>
      <div className="infoContainer flexColumnCenter">
        <h2 className="title">{title}</h2>
        <p className="text16">{description}</p>
        {inProgress && (
          <p className="text16 progressText">{t("PROJECTS_IN_PROGRESS")}</p>
        )}
        <div className="links flex justify-center items-center gap-[10px]">
          <RouterLink to={inProgress ? "/" : gitHubLink} className='linkButton flex justify-center items-center' target={inProgress ? "" : '_Blank'}>
            <img src="/img/header/gitHubIcon.svg" alt="" />
          </RouterLink>
          <RouterLink to={inProgress ? "/" : projectLink} className='linkButton flex justify-center items-center' target={inProgress ? "" : '_Blank'}>
            <img src="/img/home/linkIcon.svg" alt="" />
          </RouterLink>
        </div>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <div key={index} className={`flex justify-center items-center ${tech.className} ${inProgress ? "bg-[#6464649c]" : ""}`}>
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
      projectLink: 'https://infinite-gallery-ms.netlify.app',
      inProgress: false
    },
    {
      title: t('PROJECT_TITLE_2'),
      description: t('PROJECT_DESCRIPTION_2'),
      technologies: [
        { text: 'Tailwind', className: 'bg-[#44A8B3]' },
        { text: 'Typescript', className: 'bg-[#44A8B3]' },
        { text: 'Python', className: 'bg-[#44A8B3]' },
        { text: 'SQL', className: 'bg-[#44A8B3]' },
        { text: 'React', className: 'bg-[#53C1DE]' },
      ],
      img: 'catalog_template.png',
      gitHubLink: 'https://github.com/Martinsanchez06/Galery_infinite',
      projectLink: 'https://infinite-gallery-ms.netlify.app',
      inProgress: true
    }
  ];

  const techSkills = [
    { src: '/img/home/HTMLIcon.svg', alt: 'HTML' },
    { src: '/img/home/CSSIcon.svg', alt: 'CSS' },
    { src: '/img/home/JSIcon.svg', alt: 'JavaScript' },
    { src: '/img/home/TypeScriptIcon.svg', alt: 'Typescript' },
    { src: '/img/home/ReactIcon.svg', alt: 'React' },
    { src: '/img/home/PythonIcon.svg', alt: 'Python' },
    { src: '/img/home/GitIcon.svg', alt: 'Git' },
    { src: '/img/home/SQLIcon.svg', alt: 'SQL' },
    { src: '/img/home/NodeJSIcon.svg', alt: 'Node.js' },
  ];

  const homeRoleText = t('HOME_ROLE');

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const techGroups = chunkArray(techSkills, 3);

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
            inProgress={project.inProgress}
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
        <div className="technologiesSkills flex w-full gap-[50px]">
          {techGroups.map((group, groupIndex) => (
            <>
              {group.map((tech, index) => (
                <div className="techSkill flex justify-center items-center rounded-2xl" key={index}>
                  <img src={tech.src} alt={tech.alt} />
                </div>
              ))}
            </>
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
