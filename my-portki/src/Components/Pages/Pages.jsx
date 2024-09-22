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
    </>
);
export const CreateOrder = () => BuildCreateOrder();