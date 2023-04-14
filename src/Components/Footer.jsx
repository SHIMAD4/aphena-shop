import './scss/Footer.scss';
import logo from '../assets/Logo.svg';
import basket from '../assets/basket.svg';
import profile from '../assets/profile.svg';

const links = [
  'Главная',
  'Магазин',
  'Фотоальбом',
  'Новости',
  'Контакты',
  'Отзывы',
]

function Home() {
  return (
    <footer className='footer'>
        <div className='wrapper'>
                <a href="./"><img src={logo} alt="logo" className='footer__logo logo'/></a>
                <ul className='footer__list list'>
                {links.map((link) => <li className='list__item'><a href="./" className='list__link'>{link}</a></li>)}
                </ul>
                <div className='footer__callback callback'>
                    <a href="tel:+7 999 999 99 99" className='callback__tel'>+7 999 999 99 99</a>
                    <a href="maitlo:primer@gmail.com" className='callback__mail'>primer@gmail.com</a>
                </div>
                <ul className='footer__icons icons list'>
                    <li className='icons__item'><button className='list__btn btn'><img src={basket} alt="basket" className='basket--icon'/></button></li>
                    <li className='icons__item'><button className='list__btn btn'><img src={profile} alt="profile" /></button></li>
                </ul>
        </div>
    </footer>
  );
}

export default Home;