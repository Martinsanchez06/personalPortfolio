import Button from '../button/button';
import './confirmationMessage.css';

function ConfirmationMessage() {
    return (
        <div className='confirmationMessageBlurrContainer flex min-[1300px]:justify-center items-center max-[600px]:justify-baseline'>
            <div className='confirmationMessageContainer maxWidth flex flex-col justify-center items-center'>
                <img src="/img/contact/checkForm.png" alt="" />
                <h2 className='title'>Gracias por enviar tu mensaje!</h2>
                <p className='text'>Pronto estaré en contacto contigo</p>
                <Button
                    text={'Inicio'}
                    link={'/'}
                />
            </div>
        </div>
    );
}

export default ConfirmationMessage;
