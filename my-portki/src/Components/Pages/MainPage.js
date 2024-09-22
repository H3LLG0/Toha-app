import { Link } from "react-router-dom";

export const MainPage = () => (
    <div className="app-wrapper">
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
            <section className="about-us">
                <div className="advantages">
                    <div className="advantage">
                        <div className="advantage-icon">
                            <img src="../Images/ideas.png" alt="ideas"/>
                        </div>
                        <h3>Воплощение ваших идей</h3>
                    </div>
                    <div className="advantage">
                        <div className="advantage-icon">
                            <img src="../Images/unique.png" alt="unique"/>
                        </div>
                        <h3>Уникальность модели</h3>
                    </div>
                    <div className="advantage">
                        <div className="advantage-icon">
                            <img src="../Images/figure.png" alt="figure"/>
                        </div>
                        <h3>Безупречная посадка<br/> по фигуре</h3>
                    </div>
                </div>
            </section>
        </main>
        <footer>

        </footer>
    </div>
);