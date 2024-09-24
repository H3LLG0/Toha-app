import { Link } from "react-router-dom";

const BuildPricePage = () => (
    <>
     <header>
            <nav className="navbar">
                <ul className="menu-list">
                    <li className="nav-logo"><Link id="Link-logo" to="/">WHERE MY PORTKI</Link></li>
                    <li><Link to="/price" id="Link">Прайс лист</Link></li>
                    <li><Link to="/our-work" id="Link">Наши работы</Link></li>
                    <li><Link to="/create-order" id="Link">Оформить заказ</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <h1>ПРАЙС</h1>

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

const BuildOurWork = () => (
    <>
     <header>
            <nav className="navbar">
                <ul className="menu-list">
                    <li className="nav-logo"><Link id="Link-logo" to="/">WHERE MY PORTKI</Link></li>
                    <li><Link to="/price" id="Link">Прайс лист</Link></li>
                    <li><Link to="/our-work" id="Link">Наши работы</Link></li>
                    <li><Link to="/create-order" id="Link">Оформить заказ</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <h1>НАШИ РАБОТЫ</h1>
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
export const OurWork = () => BuildOurWork();

const BuildCreateOrder = () => (
    <>
     <header>
            <nav className="navbar">
                <ul className="menu-list">
                    <li className="nav-logo"><Link id="Link-logo" to="/">WHERE MY PORTKI</Link></li>
                    <li><Link to="/price" id="Link">Прайс лист</Link></li>
                    <li><Link to="/our-work" id="Link">Наши работы</Link></li>
                    <li><Link to="/create-order" id="Link">Оформить заказ</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <h1>ОФОРМИТЬ ЗАКАЗ</h1>
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
export const CreateOrder = () => BuildCreateOrder();