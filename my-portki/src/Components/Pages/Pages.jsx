import { Link } from "react-router-dom";
import { GetPrice, PostOrder } from "../Scripts/PagesFunctions";


const BuildPricePage = () => (
    <>
     <header onLoad={GetPrice}>
            <nav className="navbar">
                <ul className="menu-list">
                    <li className="nav-logo"><Link id="Link-logo" to="/">WHERE MY PORTKI</Link></li>
                    <li><Link to="/price" id="Link">Прайс лист</Link></li>
                    <li><Link to="/create-order" id="Link">Оформить заказ</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <h1>ПРАЙС</h1>
            <div className="PriceList-wrapper">
                <div className="table-warpper">
                    <table className="Price-List-table">
                        <tr><td className="td-naming">Услуга</td><td className="td-price">Цена</td></tr>
                    </table>
                </div>
            </div>
        </main>
        <footer>
            <div className="footer-content">
                <div className="phone">
                    <span>Телефоны</span>
                    <div>
                        8 (960) 746-72-31<br/>
                        8 (910) 921-06-96 
                    </div>
                </div>
                <div className="work-day">
                    <span>Часы работы</span>
                    <div>
                    Пн-Пт - c 09:00 до 18:00<br/>
                    Сб - с 10:00 до 15:00<br/>
                    Вс - выходной
                    </div>
                </div>
                <div className="email">
                    <span>E-mail</span>
                    <div>
                        fasons@yandex.ru
                    </div>
                </div>
            </div>
        </footer>        
    </>
);
export const PricePage = () => BuildPricePage();


const BuildCreateOrder = () => (
    <>
    <div className="kostyl">
     <header>
            <nav className="navbar">
                <ul className="menu-list">
                    <li className="nav-logo"><Link id="Link-logo" to="/">WHERE MY PORTKI</Link></li>
                    <li><Link to="/price" id="Link">Прайс лист</Link></li>
                    <li><Link to="/create-order" id="Link">Оформить заказ</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <h1>ОФОРМИТЬ ЗАКАЗ</h1>
            <div className="order-form-wrapper">
                <form id="order-form" className="order-form">
                    <div className="order_form_inputs">
                        <label htmlFor="name">Имя пользователя</label><br/>
                        <input type="text" placeholder="имя" id="name" name="name"/><br/>
                        <label htmlFor="surname">Фамилия пользователя</label><br/>
                        <input type="text" placeholder="фамилия" id="surname" name="surname" /><br/>
                        <label htmlFor="pathronumic">Отчество пользователя</label><br/>
                        <input type="text" placeholder="отчество" id="pathronumic" name="pathronumic" />
                    </div>
                    <div className="phone-email">
                    <label htmlFor="phone">Номер телефона</label><br/>
                        <input type="text" placeholder="номер телефона"  id="phone" name="phone"/><br/>
                        <label htmlFor="email">Адрес электронной почты</label><br/>
                        <input type="text" placeholder="email" id="email" name="email" />
                    </div>
                    <button type="button" onClick={PostOrder}>отправить заявку</button>
                </form>
            </div>
        </main>
        <footer>
            <div className="footer-content">
                <div className="phone">
                    <span>Телефоны</span>
                    <div>
                        8 (960) 746-72-31<br/>
                        8 (910) 921-06-96 
                    </div>
                </div>
                <div className="work-day">
                    <span>Часы работы</span>
                    <div>
                    Пн-Пт - c 09:00 до 18:00<br/>
                    Сб - с 10:00 до 15:00<br/>
                    Вс - выходной
                    </div>
                </div>
                <div className="email">
                    <span>E-mail</span>
                    <div>
                        fasons@yandex.ru
                    </div>
                </div>
            </div>
        </footer>
        </div>
    </>
);
export const CreateOrder = () => BuildCreateOrder();