import greaterThan from '../../images/greaterThan.png';
import './menuElements.css';

export default function MapHistory(props) {
    return (
        <div className='map-history-content'>
            <a className="home-link-history" title="Головна" href="/">{props.home}</a>
            <img className="icon-greaterThan" src={greaterThan} alt=">" />
            <span className="home-link-history">{props.lastPage}</span>
        </div> 
    )
}