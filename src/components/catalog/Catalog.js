import data from '../../data/underwear.json';
import HistoryNav from '../elements/MapHistory'
import './catalog.css';

export default function Catalog() {


    const newdata = data.map((data => {
        return (
            <div key={data.id} className='item-element'>
                <img className='item-element-photo' src={data.image1} alt={data.title} />
                <p className='item-element-title'>{data.title}</p>
                <p className='item-element-price'>{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} грн</p>
            </div>
        )
    }))


    return (
        <div className='catalog-page-info'>
            <HistoryNav home="Головна" lastPage="Каталог" />

            <h1 className='contact-h1'>Каталог</h1>
            <div className='catalog-page'>

                {newdata}
            </div>
        </div>
    )
}

