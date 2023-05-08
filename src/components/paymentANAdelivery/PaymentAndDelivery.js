import Menu from '../elements/MenuElements';
import './paymentanddel.css';
import HistoryNav from '../elements/MapHistory'

export default function PaymentAndDelivery() {
    return (
        <div className='pay-and-deliv-container'>
            <div className='pay-and-deliv-block'>
                <Menu />
                <div className='pay-and-deliv-info'>
                    <HistoryNav home="Головна" lastPage="Оплата і доставка" />
                    <h1 className='pay-and-deliv-h1'>Оплата і доставка</h1>
                    <div className='pay-and-deliv-page-content'>
                        <p className='strong-pandd'>Оплата</p>
                        <p className='margin-style'>Оплата по Україні</p>
                        <p className='margin-style'>1. Ми працюємо за умови переодплати на розрахунковий рахунок у розмірі 100% або 50% суми замовлення.</p>
                        <br/>
                        <br/>
                        <em >Оплату замовлення ви можете здійснити на нашому сайті при офорленнні або за реквізитами на рахунок, які вам надішле наш менеджер при підтвердженні замовлення.</em>


                        <p className='strong-pandd-delivery'>Доставка</p>
                        <p className='pay-and-deliv-delivery1'>Доставка по Україні </p>
                        <p className='pay-and-deliv-delivery'>Здійснюється службою доставки Нова Пошта</p>

                        <p className='pay-and-deliv-delivery2'>1. Вироби, що є наявності відправляються протягом 2 днів з моменту оплати замовлення.</p>
                        <p className='pay-and-deliv-delivery'>2. Вироби під замовлення будуть готові протягом <em>5-10 робочих днів</em> з моменту оплати замовлення і відправляються службою доставки Нова Пошта.</p>

                        <p className='pay-and-deliv-delivery2'><em>Інформація про наявність товара буде уточнюватися нашим менеджером при підтвержденні замовлення.</em></p>
                        <p className='pay-and-deliv-delivery'>Вартість доставки замовлення розраховується згідно тарифам служби доставки.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}