import { Link } from "react-router-dom";
import { SubmitPost } from '../Scripts/ClientRates';

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
                            <img src="../Images/unique.png" alt="unique"/>
                        </div>
                        <h3>Уникальность модели</h3>
                    </div>
                    <div className="advantage">
                        <div className="advantage-icon">
                            <img src="../Images/ideas.png" alt="ideas"/>
                        </div>
                        <h3>Воплощение ваших идей</h3>
                    </div>
                    <div className="advantage">
                        <div className="advantage-icon">
                            <img src="../Images/figure.png" alt="figure"/>
                        </div>
                        <h3>Безупречная посадка<br/> по фигуре</h3>
                    </div>
                </div>
            </section>
            <section className="slogan">
                <h2>Ваша любимая одежда рождается у нас</h2>
                <p>
                    Мы очень любим шить одежду. Пошив одежды мы выполняем из любого вида одежных тканей,
                    начиная от пальтовых тканей, и заканчивая шелком, шифоном, наитончайшим кружевом. Что же получите Вы, обратившись к нам?
                </p>
                <p>
                    <strong>Воплощение Ваших идей.</strong> Индивидуальный пошив одежды на заказ позволит Вам воплотить все
                    Ваши дизайнерские идеи и мечты в жизнь.
                </p>
                <p>
                   <strong>Уникальность модели.</strong> Вы сможете создать свой собственный, уникальный и оригинальный образ.
                    Пошив одежды в ателье - оптимальное решение для тех, кто точно знает, что он хочет, но не может найти такую модель в магазинах готовой одежды.
                </p>
                <p>
                    <strong>Безупречная посадка по фигуре.</strong> Заказав в нашем ателье индивидуальный пошив платья, юбки, блузки, пиджака или даже пальто, Вы получите вещь, идеально подходящую
                    Вам по размеру и полностью соответствующую Вашим требованиям и пожеланиям, что особенно актуально для людей с нестандартной фигурой.
                </p>
                <p>
                    <strong>Высокое качество выполненных работ.</strong> В ателье используется японское и немецкое швейное оборудование. Наши мастера имеют
                    большой опыт работы. Ателье ведет свою деятельность с 2012 года и за это время получило много положительных отзывов.
                    Кроме того, мы даем гарантию на нашу работу.
                </p>
                <p>
                    <strong>Любимая вещь в гардеробе.</strong> Мы постараемся сделать все, чтобы Ваша новая одежда еще долго приносила Вам радость.
                </p>
            </section>
            <section className="our-reating">
                <h2>ОТЗЫВЫ КЛИЕНТОВ</h2>
                <div className="rating-wrapper">
                    
                </div>
            </section>
            <section className="rate">
                <h2>ОЦЕНИТЕ НАШУ РАБОТУ</h2>
                <div className="rate-form">
                    <form className="rate-us" id="rate-us">
                        <div className="input-text">
                            <input type="text" name="username" id="name" placeholder="Имя"/> <input type="text" name="usersurname" id="surname" placeholder="Фамилия"/>
                        </div>
                        <div className="polzunok">
                            <label>Выберите балл</label>           <div className="polzunok-line"><span>0</span><input type="range" min="0" max="5" step="1" name="rating" id="rating" list="mark"/><span>5</span></div>
                            <datalist id="mark">
                                <option value="0"/>
                                <option value="1"/>
                                <option value="2"/>
                                <option value="3"/>
                                <option value="4"/>
                                <option value="5"/>
                            </datalist>
                        </div>
                        <textarea className="rate-text" placeholder="текст" id="rate-text" name="rate-text">

                        </textarea><br/>
                        <button onClick={SubmitPost} className="form-submit" type="submit" id="submit">Отправить</button>
                    </form>
                </div>
            </section>
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
);