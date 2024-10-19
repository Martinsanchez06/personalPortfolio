import { Link } from 'react-router-dom';
import './button.css';

function Button({ text, className, imgPath, link, blank }) {
    return (
        <Link className={`button flexCenter ${className}`} to={link} target={`${blank ? "_Blank" : ""}`}>
            <p>{text}</p>
            {imgPath && ( <img src={imgPath} alt="" />)}
        </Link>
    );
}

export default Button;
