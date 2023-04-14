import './scss/Header.scss';
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

function Header() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <a href="./"><img src={logo} alt="logo" className='header__logo logo'/></a>
        <nav className='header__nav nav'>
          <ul className='nav__list list'>
            {links.map((link) => <li className='list__item'><a href="./" className='list__link'>{link}</a></li>)}
            <li className='list__item'><button className='list__btn btn'><img src={basket} alt="basket" className='basket--icon'/></button></li>
            <li className='list__item'><button className='list__btn btn'><img src={profile} alt="profile" /></button></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
