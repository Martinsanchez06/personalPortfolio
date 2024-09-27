import './header.css'

function Header() {
    return (
        <header className="header">
            <div className="headerMainContainer">
                <div className="socialMediaButtoncontainer">
                    <button className="socialMediaButton">
                        <img src="/img/gitHubIcon.svg" alt="" />
                    </button>
                    <button className="socialMediaButton">
                        <img src="/img/linkedinIcon.svg" alt="" />
                    </button>
                </div>
                <div className="linksContainer">
                    <p className="link">My proyects</p>
                    <p className="link">Contact me</p>
                </div>
            </div>
        </header>
    )
}


export default Header