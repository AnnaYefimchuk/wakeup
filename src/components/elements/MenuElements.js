import { NavLink } from 'react-router-dom';
import './menuElements.css';

export default function MenuElements() {

    return (
        <div className='side-menu'>
            <ul className='side-menu-elements'>
                <li className='side-menu-elements-li'><NavLink to='/catalog' className={({ isActive }) => (isActive ? "side-menu-elements-li-active" : "side-menu-elements-li-pasiv")}> Каталог</NavLink></li>
                <li className='side-menu-elements-li'><NavLink to='/about' className={({ isActive }) => (isActive ? "side-menu-elements-li-active" : "side-menu-elements-li-pasiv")}>Про нас</NavLink></li>
                <li className='side-menu-elements-li'><NavLink to='/payment' className={({ isActive }) => (isActive ? "side-menu-elements-li-active" : "side-menu-elements-li-pasiv")}>Оплата і доставка</NavLink></li>
                <li className='side-menu-elements-li'><NavLink to='/exchange' className={({ isActive }) => (isActive ? "side-menu-elements-li-active" : "side-menu-elements-li-pasiv")}>Обмін та повернення</NavLink></li>
                <li className='side-menu-elements-li'><NavLink to='/contact' className={({ isActive }) => (isActive ? "side-menu-elements-li-active" : "side-menu-elements-li-pasiv")}>Контактна інформація</NavLink></li>
            </ul>
        </div >
    );
}
