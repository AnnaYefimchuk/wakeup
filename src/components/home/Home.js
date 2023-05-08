import { Link } from 'react-router-dom';
import catalog from '../../images/catalog.png';
import './home.css';

export default function Home() {



    return (
        <div className='home-content'>
            <div className='home-info-block'>
                <nav >
                    <Link to='/catalog' className='home-link-to-catalog'>
                        <img className="home-icon-to-catalog" src={catalog} alt="Catalog" /></Link>
                </nav>
                
            </div>
            <div>Top 5 </div>
        </div>
    );
}