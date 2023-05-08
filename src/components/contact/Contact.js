import Menu from '../elements/MenuElements'
import email from '../../images/emailB.png';
import viber from '../../images/viberB.png';
import telegramB from '../../images/telegramB.png';
import './contact.css';
import HistoryNav from '../elements/MapHistory'

export default function Contact() {
    return (
        <div className='contact-container'>
            <div className='contact-block'>
                <Menu />
                <div className='contact-content'> 
                    <HistoryNav home="Головна" lastPage="Контактна інформація" />
                    
                    <h1 className='contact-h1'>Контактна інформація</h1>
                    <div className='contact-info'>
                        <div className='contact-info-item'>
                            <img className="icon-contact-mail" src={email} alt="E-mail" />
                            <span>wakeupua@mail.com</span>
                        </div>

                        <div className='contact-info-item'>
                            <img className="icon-contact" src={viber} alt="Viber" />
                            <span>097 090-51-38</span>
                        </div>

                        <div className='contact-info-item'>
                            <img className="icon-contact" src={telegramB} alt="Telegram" />
                            <span>097 090-51-38</span>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}