import './header.css';
import { Link as RouterLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import i18n from '../../utilities/translations';
import { useState } from 'react';

function Header() {
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; // Cambia este valor según tu necesidad
        window.scrollTo({
            top: yCoordinate + yOffset,
            behavior: 'smooth' // Asegura un scroll suave
        });
    };

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <header className="header">
            <div className="headerMainContainer">
                <div className="socialMediaButtoncontainer">
                    <RouterLink to={'https://github.com/Martinsanchez06'} className='socialMediaButton' target='_Blank'>
                        <img src="/img/header/gitHubIcon.svg" alt="" />
                    </RouterLink>
                    <RouterLink to={'https://www.linkedin.com/in/mart%C3%ADn-s%C3%A1nchez-77077b24a/'} className='socialMediaButton' target='_Blank'>
                        <img src="/img/header/linkedinIcon.svg" alt="" />
                    </RouterLink>
                </div>
                <div className="linksContainer">
                    {/* Enlace de scroll usando react-scroll */}
                    <Link smooth to="/#home" className="navLink">
                        {t('HEADER_HOME')}

                    </Link>
                    <p>•</p>
                    <Link smooth to="/#experience" className="navLink" scroll={scrollWithOffset}>
                        {t('HEADER_EXPERIENCE')}
                    </Link>
                    <p>•</p>
                    <Link
                        smooth
                        to="projects"
                        className="navLink"
                        scroll={scrollWithOffset}
                    >
                        {t('HEADER_PROJECTS')}
                    </Link>
                </div>
                <div className="changeLanguajeContainer flex justify-center items-center">
                    <button onClick={() => changeLanguage('es')}>ES</button>
                    <div className='dividerLine'></div>
                    <button onClick={() => changeLanguage('en')}>EN</button>
                </div>
            </div>
            <div className="headerMainContainer mobile">
                <div className="changeLanguajeContainer flex justify-center items-center absolute left-[25px]">
                    <button onClick={() => changeLanguage('es')}>ES</button>
                    <div className='dividerLine'></div>
                    <button onClick={() => changeLanguage('en')}>EN</button>
                </div>
                <div className={`blurrBackground ${showMobileMenu && "active"}`} onClick={() => setShowMobileMenu(false)}></div>
                <div className={`iconMenuMobile ${showMobileMenu && "active"}`}>
                    <img src="/img/header/menuIconMobile.svg" alt="" onClick={() => setShowMobileMenu(!showMobileMenu)} />
                </div>
                <div className={`menuMobile flex justify-center items-center ${showMobileMenu && "active"}`}>
                    <div className='menu flex gap-[25px] flex-col'>
                        <div className="linksContainer flex-col">
                            <Link smooth to="/#home" className="navLink">
                                {t('HEADER_HOME')}

                            </Link>
                            <div className='line-divider-menu-mobile'></div>
                            <Link smooth to="/#experience" className="navLink" scroll={scrollWithOffset}>
                                {t('HEADER_EXPERIENCE')}
                            </Link>
                            <div className='line-divider-menu-mobile'></div>
                            <Link
                                smooth
                                to="projects"
                                className="navLink"
                                scroll={scrollWithOffset}
                            >
                                {t('HEADER_PROJECTS')}
                            </Link>
                            <div className='line-divider-menu-mobile'></div>
                        </div>
                        <div className="socialMediaButtoncontainer">
                            <RouterLink to={'https://github.com/Martinsanchez06'} className='socialMediaButton' target='_Blank'>
                                <img src="/img/header/gitHubIcon.svg" alt="" />
                            </RouterLink>
                            <RouterLink to={'https://www.linkedin.com/in/mart%C3%ADn-s%C3%A1nchez-77077b24a/'} className='socialMediaButton' target='_Blank'>
                                <img src="/img/header/linkedinIcon.svg" alt="" />
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
