// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definir las traducciones
const en = {
    // ---------- HEADER ----------
    HEADER_HOME: 'Home',
    HEADER_EXPERIENCE: 'Experience',
    HEADER_PROJECTS: 'Projects',


    // ---------- HOME ----------


    // ---------- MAIN SECTION ----------
    HOME_GREETING: "Hello! I'm Martin",
    HOME_ROLE: '<Full Stack Developer/>',
    HOME_CONTACT_ME: 'Contact Me',
    HOME_DOWNLOAD_CV: 'Download CV',

    // ---------- EXPERIENCE SECTION ----------
    EXPERIENCE_TITLE: 'Experience',
    EXPERIENCE_DATE_1: 'January 2022 - January 2024',
    EXPERIENCE_TITLE_1: 'Full Stack Developer at AT&T | 5IG Solutions',
    EXPERIENCE_DESCRIPTION_1: `As a Full Stack Developer, I contributed to building the company's flagship website using React.js, Node.js, and SQL, now serving over 150,000 daily users. I optimized databases and backend processes, reducing server response times with advanced SQL techniques. I mentored team members on front-end code optimization, enhancing overall code quality. Under expert mentorship, I mastered database management and SQL optimization, elevating system performance and reliability.`,
    EXPERIENCE_DATE_2: 'January 2024 - October 2024',
    EXPERIENCE_TITLE_2: 'Full Stack Developer | 5IG Solutions',
    EXPERIENCE_DESCRIPTION_2: `In my previous role, I developed the company's main homepage from coding to deployment using React, ensuring a seamless user experience. By integrating code with Power Automate and I automated processes. Utilizing Dataverse as the primary storage, I managed and integrated data. I implemented advanced form logic with React components and hooks like useRef, and created custom React hooks to enhance performance and maintainability across the codebase. Additionally, I developed an AI-driven algorithm in Python for product recommendations capable of processing multiple data sources, which elevated user engagement.`,
    EXPERIENCE_DATE_3: 'December 2024 - Present',
    EXPERIENCE_TITLE_3: 'Full Stack Developer | Shokworks, Inc.',
    EXPERIENCE_DESCRIPTION_3: `As a Full Stack Developer, I refactored backend systems using NestJS, TypeORM, and PostgreSQL, achieving greater speed and stability in large-scale data processing. I developed data transformation systems and performance metrics for strategic decisions. Integrated robust backends with React, Next.js, and TypeScript, optimizing security and user experience. Implemented AI solutions with OpenAI and campaign automation in Meta/Google Ads, reducing manual processes by 30%. Created randomization systems and recommendation algorithms for social apps, improving user interaction and content discovery. Built microservices architectures on AWS, supporting 30% more data volume with reliable continuous flow.`,

    // ---------- PROYECTS SECTION ----------
    PROJECTS_TITLE: 'Projects',
    PROJECTS_IN_PROGRESS: "In progress!",
    PROJECT_TITLE_1: 'Infinite Image Gallery',
    PROJECT_DESCRIPTION_1: 'With this project, I have practiced and improved my skills in React, especially in integrating APIs like Unsplash to create an image gallery with infinite scroll. I learned to manage states and effects using hooks and optimized performance by implementing lazy loading and component memoization. Additionally, I enhanced my responsive design abilities using Tailwind CSS to craft an adaptable and attractive interface.',
    PROJECT_TITLE_2: 'Product Catalog',
PROJECT_DESCRIPTION_2: 'This online product catalog employs a layered architecture in FastAPI, implementing CRUD operations, OAuth2 authentication with Google, and JWT for secure sessions. On the frontend, I used React with TypeScript and Context + Reducers, along with the Container-Presenter pattern for clear and efficient state management. Real-time filtering enhances user experience in the catalog, and the backend database structure and SQL queries are optimized for performance and efficient product relationship management.',


    // ---------- TECH SKILLS SECTION ----------
    TECHNICAL_SKILLS_TITLE: 'Technical Skills',

    // ---------- LAST CONTACT SECTION ----------
    READY_TO_TRANSFORM: 'Ready to turn your ideas into reality?',
    HELP_GROW: 'I can help you grow your project or integrate into your team.',


    CONTACT_FORM_TITLE: 'Let\'s create something <span>amazing</span> together',
    CONTACT_FORM_INTERESTED_IN: 'I am interested in...',
    CONTACT_FORM_OPTION_GENERAL: 'General inquiry',
    CONTACT_FORM_OPTION_FREELANCE: 'Freelance project',
    CONTACT_FORM_OPTION_JOB: 'Job enquiry',
    CONTACT_FORM_NAME_LABEL: 'Name',
    CONTACT_FORM_EMAIL_LABEL: 'Email Address',
    CONTACT_FORM_MESSAGE_LABEL: 'Your message',
    CONTACT_FORM_SEND_BUTTON: 'Send Message',
    CONTACT_FORM_SCHEDULE_MEETING: 'Booking with me',
    CONTACT_FORM_LOCATION: 'Colombia',
    CONTACT_FORM_EMAIL: 'martin.sanchez0653@gmail.com',
    CONTACT_FORM_ERROR_REQUIRED: 'Required',
    CONTACT_FORM_ERROR_INVALID_EMAIL: 'Invalid email address',
    CONTACT_FORM_ERROR_MIN_LENGTH: 'Must be at least 25 characters',
    CONTACT_FORM_ERROR_SEND_FAIL: 'Oops! Something went wrong, please try again later.',
    CONTACT_FORM_SUCCESS_MESSAGE: 'Your message has been sent successfully!',
    CONTACT_FORM_ERROR_EMAILJS: 'There was an error sending the email',


    // ---------- FOOTER ----------

    FOOTER_DEVELOPED_BY: '© 2024 Developed and designed by Martin Sanchez.',
    FOOTER_MADE_WITH: 'Made with ',
};

const es = {
    // ---------- HEADER ----------
    HEADER_HOME: 'Inicio',
    HEADER_EXPERIENCE: 'Experiencia',
    HEADER_PROJECTS: 'Proyectos',


    // ---------- HOME ----------


    // ---------- MAIN SECTION ----------
    HOME_GREETING: '¡Hola! Soy Martin',
    HOME_ROLE: '<Desarrollador Full Stack/>',
    HOME_CONTACT_ME: 'Contáctame',
    HOME_DOWNLOAD_CV: 'Descargar CV',

    // ---------- EXPERIENCE SECTION ----------
    EXPERIENCE_TITLE: 'Experiencia',
    EXPERIENCE_DATE_1: 'Enero 2022 - Enero 2024',
    EXPERIENCE_TITLE_1: 'Desarrollador Full Stack en AT&T | 5IG Solutions',
    EXPERIENCE_DESCRIPTION_1: 'Como desarrollador full stack, contribuí a la creación del sitio web insignia de la empresa utilizando React.js, Node.js y SQL, que ahora atiende a más de 150 000 usuarios diarios. Optimicé las bases de datos y los procesos backend, reduciendo los tiempos de respuesta del servidor con técnicas SQL avanzadas. Orienté a los miembros del equipo en la optimización del código frontend, mejorando la calidad general del código. Bajo la tutela de expertos, dominé la gestión de bases de datos y la optimización SQL, lo que elevó el rendimiento y la confiabilidad del sistema.',
    EXPERIENCE_DATE_2: 'Enero 2024 - Octubre 2024',
    EXPERIENCE_TITLE_2: 'Desarrollador Full Stack | 5IG Solutions',
    EXPERIENCE_DESCRIPTION_2: 'En mi puesto anterior, desarrollé la página de inicio principal de la empresa desde la codificación hasta la implementación utilizando React, lo que garantizó una experiencia de usuario perfecta. Al integrar el código con Power Automate, automaticé los procesos. Utilizando Dataverse como almacenamiento principal, administré e integré los datos. Implementé una lógica de formulario avanzada con componentes y ganchos de React como useRef, y creé ganchos de React personalizados para mejorar el rendimiento y la capacidad de mantenimiento en toda la base de código. Además, desarrollé un algoritmo impulsado por IA en Python para recomendaciones de productos capaz de procesar múltiples fuentes de datos, lo que aumentó la participación del usuario.',
    EXPERIENCE_DATE_3: 'Diciembre 2024 - Presente',
    EXPERIENCE_TITLE_3: 'Desarrollador Full Stack | Shokworks, Inc.',
    EXPERIENCE_DESCRIPTION_3: 'Como desarrollador full stack, refactoricé sistemas backend utilizando NestJS, TypeORM y PostgreSQL, logrando mayor velocidad y estabilidad en el procesamiento de datos a gran escala. Desarrollé sistemas de transformación de datos y métricas de rendimiento para decisiones estratégicas. Integré backends robustos con React, Next.js y TypeScript, optimizando seguridad y experiencia de usuario. Implementé soluciones de IA con OpenAI y automatización de campañas en Meta/Google Ads, reduciendo procesos manuales en un 30%. Creé sistemas de aleatorización y algoritmos de recomendación para aplicaciones sociales, mejorando la interacción del usuario y el descubrimiento de contenido. Construí arquitecturas de microservicios en AWS, soportando 30% más volumen de datos con flujo continuo confiable.',

    // ---------- PROYECTS SECTION ----------
    PROJECTS_TITLE: 'Proyectos',
    PROJECTS_IN_PROGRESS: "¡En progreso!",
    PROJECT_TITLE_1: 'Galería de Imágenes Infinita',
    PROJECT_DESCRIPTION_1: 'Con este proyecto, he practicado y mejorado mis habilidades en React, especialmente integrando APIs como Unsplash para crear una galería de imágenes con desplazamiento infinito. Aprendí a gestionar estados y efectos usando hooks y optimicé el rendimiento implementando carga diferida y memorización de componentes. Además, mejoré mis habilidades de diseño responsivo utilizando Tailwind CSS para crear una interfaz adaptable y atractiva.',
    PROJECT_TITLE_2: 'Catálogo de Productos',
PROJECT_DESCRIPTION_2: 'Este catálogo de productos online utiliza una arquitectura en capas en FastAPI, implementando operaciones CRUD, autenticación OAuth2 con Google y generación de JWT para sesiones seguras. En el frontend, empleé React con TypeScript y Context + Reducers, junto al patrón Container-Presenter para una gestión de estado clara y eficiente. El filtrado en tiempo real optimiza la experiencia del usuario en el catálogo, y en el backend, la estructura de la base de datos y las consultas SQL están diseñadas para un rendimiento óptimo y una gestión eficiente de relaciones entre productos.',


    // ---------- TECH SKILLS SECTION ----------
    TECHNICAL_SKILLS_TITLE: 'Habilidades Técnicas',

    // ---------- LAST CONTACT SECTION ----------
    READY_TO_TRANSFORM: '¿Listo para transformar tus ideas en realidad?',
    HELP_GROW: 'Puedo ayudarte a hacer crecer tu proyecto o integrarme en tu equipo.',


    CONTACT_FORM_TITLE: 'Hagamos algo <span>increíble</span> juntos',
    CONTACT_FORM_INTERESTED_IN: 'Estoy interesado en...',
    CONTACT_FORM_OPTION_GENERAL: 'Consulta general',
    CONTACT_FORM_OPTION_FREELANCE: 'Proyecto freelance',
    CONTACT_FORM_OPTION_JOB: 'Oferta de trabajo',
    CONTACT_FORM_NAME_LABEL: 'Nombre',
    CONTACT_FORM_EMAIL_LABEL: 'Correo electrónico',
    CONTACT_FORM_MESSAGE_LABEL: 'Tu mensaje',
    CONTACT_FORM_SEND_BUTTON: 'Enviar mensaje',
    CONTACT_FORM_SCHEDULE_MEETING: 'Agenda conmigo',
    CONTACT_FORM_LOCATION: 'Colombia',
    CONTACT_FORM_EMAIL: 'martin.sanchez0653@gmail.com',
    CONTACT_FORM_ERROR_REQUIRED: 'Obligatorio',
    CONTACT_FORM_ERROR_INVALID_EMAIL: 'Dirección de correo electrónico inválida',
    CONTACT_FORM_ERROR_MIN_LENGTH: 'Debe tener al menos 25 caracteres',
    CONTACT_FORM_ERROR_SEND_FAIL: '¡Ups! Algo salió mal, por favor intenta nuevamente más tarde.',
    CONTACT_FORM_SUCCESS_MESSAGE: '¡Tu mensaje ha sido enviado exitosamente!',
    CONTACT_FORM_ERROR_EMAILJS: 'Hubo un error al enviar el correo',


    // ---------- FOOTER ----------

    FOOTER_DEVELOPED_BY: '© 2024 Desarrollado y diseñado por Martin Sanchez.',
    FOOTER_MADE_WITH: 'Hecho con ',

};

const resources = {
    en: { translation: en },
    es: { translation: es },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // React ya maneja el escape de valores
    },
});

export default i18n;