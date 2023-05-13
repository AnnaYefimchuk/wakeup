import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './footer.css';
import emailBeige from '../../images/emailBeige.png';
import viberBeige from '../../images/viberBeige.png';
import telegramBeige from '../../images/telegramBeige.png';
import github from '../../images/github.png';
import facebookBeige from '../../images/facebookBeige.png';
import instagramBeige from '../../images/instaBeige.png';
import mobile from '../../images/mobile.png';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-container-first'>
                    <div>
                        <p className='footer-container-first-year font12'>© 2016—2023</p>
                        <p className='footer-container-first-brend font12'>Wakeup_ua</p>
                    </div>
                    <div className='footer-container-first-mob font12'><img className="mobile-png" src={mobile} alt="Mobile" /> Мобільна версія</div>
                    <div className='footer-container-first-platform font12'>Працює на платформі GitHub
                        <img className="github-png" src={github} alt="GitHub" />
                    </div>
                </div>

                <div className='footer-container-second'>
                    <h4 className='footer-container-title'>Каталог</h4>
                    <nav className='footer-container-second-links'>
                        <Link to='/bazovaBilizna' className='footer-container-second-link'>Базова білизна</Link>
                        <Link to='/swimsuit' className='footer-container-second-link'>Купальники</Link>
                        <Link to='/summerSuits' className='footer-container-second-link'>Літні костюми</Link>
                    </nav>
                </div>

                <div className='footer-container-third'>
                    <h4 className='footer-container-title'>Клієнтам</h4>
                    <ul className='footer-container-third-ul'>
                        <li className='footer-container-third-links'><NavLink to='/catalog' className="footer-container-third-link"> Вхід до кабінету</NavLink></li>
                        <li className='footer-container-third-links'><NavLink to='/catalog' className="footer-container-third-link"> Каталог</NavLink></li>
                        <li className='footer-container-third-links'><NavLink to='/about' className="footer-container-third-link">Про нас</NavLink></li>
                        <li className='footer-container-third-links'><NavLink to='/payment' className="footer-container-third-link">Оплата і доставка</NavLink></li>
                        <li className='footer-container-third-links'><NavLink to='/exchange' className="footer-container-third-link">Обмін та повернення</NavLink></li>
                        <li className='footer-container-third-links'><NavLink to='/contact' className="footer-container-third-link">Контактна інформація</NavLink></li>
                    </ul>

                    <div className="footer-container-third-linkMedia font12">
                        <p>Ми в соцмережах</p>
                        <a className='footer-container-third-linkMedia-Element' title="facebook" target="_blank" href="https://www.facebook.com/wakeup.ua">
                            <img className='socialNetworks-beige-img' src={facebookBeige} alt="facebook" />
                        </a>
                        <a className='footer-container-third-linkMedia-Element' title="instagram" target="_blank" href="https://www.instagram.com/wakeup_ua/">
                            <img className='socialNetworks-beige-img' src={instagramBeige} alt="instagram" />
                        </a>
                        <a  className='footer-container-third-linkMedia-Element' title="telegram" target="_blank" href="https://t.me/wakeup_ua">
                            <img className='socialNetworks-beige-img' src={telegramBeige} alt="telegram" />
                        </a>
                    </div>
                </div>

                <div className='footer-container-last'>
                    <div>
                        <h4 className='footer-container-title'>Контактна інформація</h4>
                        <p className='font12'>Передзвонити вам?</p>
                    </div>

                    <div className='footer-container-last-phone'>
                        <div className='contact-info-item'>
                            <img className="icon-contact" src={viberBeige} alt="Viber" />
                            <span>097 090-51-38</span>
                        </div>

                        <div className='contact-info-item'>
                            <img className="icon-contact" src={telegramBeige} alt="Telegram" />
                            <span>097 090-51-38</span>
                        </div>

                        <div className='contact-info-item'>
                            <img className="icon-contact-mail" src={emailBeige} alt="E-mail" />
                            <span>wakeupua@mail.com</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}