import Menu from '../elements/MenuElements'
import './exchange.css';
import HistoryNav from '../elements/MapHistory'

export default function Exchange() {
    return (
        <div className='exchange-returne-block'>
            <div className='exchange-returne-block-element'>
                <Menu />

                <div className='returne-content'>
                    <HistoryNav home="Головна" lastPage="Обмін та повернення" />

                    <h1 className='returne-content-h1'>Обмін та повернення</h1>
                    <div className='returne-page-content'>
                        <p>Шановні дівчата, звертаємо вашу увагу, що нижня білизня та купальники згідно законодавства України (Постанова КМУ від 19 березня 1994 р. № 172) обміну і поверненню не подлягають.</p>
                        <p>Але, так як ми хочемо, щоб кожна дівчина залишилась задоволена своїм замовленням ми надаємо можливість обміняти розмір або фасон при дотриманні перечисленого нижче ряду умов:</p>
                        <div className='returne-page-firstlist'>
                            <p>1) ви повідомляєте нас про бажання обміну і відправляєте нам товар на обмін <span className='strong'>не пізніше 2х днів </span> з моменту отримання вами замовлення;</p>
                            <p>2) виріб, котрий вы хочете обміняти не був у використанні;</p>
                            <p>3) виріб повністю зберіг товарний вигляд , на ньому немає ніяких зовнішніх пошкоджень, плям (в тому числі від дезодоранту або тонального крему), дефектів і т.д.</p>
                            <p>4) пересилка відбувається за ваш рахунок, товар охайно запакований в оригінальну упаковку нашого бренду.</p>
                            <p>5) обмін здійснюється тільки якщо вам не підійшов <span className='strong'> розмір, фасон або товар має брак </span> і тільки на товар з аналогічної колекції.</p>
                        </div>
                        <ul className='returne-page-ul'>
                            <li className='returne-page-ul-li'>У разі недотримання перерахованих вище умов ми залишаємо за собою право відмовити в обміні товару.</li>
                            <li className='returne-page-ul-li'>Обмін товару буде висланий нами на протязі 5-10 робочих днів з моменту отримання посилки від вас.</li>
                            <li className='returne-page-ul-li strong padding'>Також ми сповіщуємо, що можливості повернення у нас немає!</li>
                            <li className='returne-page-ul-li strong padding'>Обмін можна здійснити одноразово.</li>
                        </ul>

                        <p className='returne-page-feedback'>Якщо раптом у вас виникли зауваження з приводу наших виробів, обов'язково
                        напишіть нам про це на пошту wakeupua99@gmail.com щоб ми могли зробити наші вироби ідеальними для вас:) </p>
                    </div>

                </div>
            </div>
        </div >

    );
}