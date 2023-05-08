import './Header.css';
import { Link } from 'react-router-dom';
import facebookW from '../../images/facebookW.png';
import instagram from '../../images/instaW.png';
import telegram from '../../images/telegramW.png';
import heart from '../../images/heartW.png';
import user from '../../images/userB.png';
import cart from '../../images/cartB.png';
import search from '../../images/search.png';

function Header() {
    return (
        <div className="header">
            <div className="header_top">

                <div className="header_top_linkMedia">
                    <a title="facebook" target="_blank" href="https://www.facebook.com/wakeup.ua">
                        <img className='socialNetworks_img' src={facebookW} alt="facebook" />
                    </a>
                    <a title="instagram" target="_blank" href="https://www.instagram.com/wakeup_ua/">
                        <img className='socialNetworks_img' src={instagram} alt="instagram" />
                    </a>
                    <a title="telegram" target="_blank" href="https://t.me/wakeup_ua">
                        <img className='socialNetworks_img' src={telegram} alt="telegram" />
                    </a>
                </div>

                <div className="header-top-site-menu">
                    <nav className="header-top-site-menu">
                        <Link to='/catalog' className='header-top-site-menu-link'>Каталог</Link>
                        <Link to='/about' className='header-top-site-menu-link'>Про нас</Link>
                        <Link to='/payment' className='header-top-site-menu-link'>Оплата і доставка</Link>
                        <Link to='/exchange' className='header-top-site-menu-link'>Обмін та повернення</Link>
                        <Link to='/contact' className='header-top-site-menu-link'>Контактна інформація</Link>
                    </nav>
                </div>

                <div className="header_top_wish">
                    <a className="header-top-wish-elements">
                        <img className="img-size" src={heart} alt="heart" />
                        <span>Бажання</span>
                    </a>
                </div>
            </div>


            <div className='header-middle'>

                <nav className='header-middle-links'>
                    <Link to='/bazovaBilizna' className='header-middle-link'>Базова білизна</Link>
                    <Link to='/swimsuit' className='header-middle-link'>Купальники</Link>
                    <Link to='/summerSuits' className='header-middle-link'>Літні костюми</Link>
                </nav>


                <div className="header-middle-search-login">
                    <form className='form-element'>
                        <img className="search-btn" src={search} alt="search" />
                        <input className='search-input' type="text" placeholder="пошук товарів" name="search" />
                    </form>

                    <a className="header-middle-login">
                        <img className="img-user" src={user} alt="user" />
                        <span>Вхід</span>
                    </a>


                    <a className='header-middle-cart'>
                        <img className="img-cart" src={cart} alt="cart" />
                        <p className='header-middle-cart-total'>0</p>
                    </a>
                </div>

            </div>
        </div>

    );
}

export default Header;