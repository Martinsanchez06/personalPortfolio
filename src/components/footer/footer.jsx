import { t } from 'i18next';
import './footer.css';

function Footer() {
    return (
        <footer className='section flexColumnCenter maxWidth footerContainer'>
            <p className="secondaryText text24">{t('FOOTER_DEVELOPED_BY')}</p>
            <p className="secondaryText text24 hearFireText">
                {t('FOOTER_MADE_WITH')}
                <span>
                    <img src="/img/footer/emoji-heart-fire.webp" alt="" />
                </span>
            </p>
        </footer>
    );
}

export default Footer;
