import './css/Header.css';
import logo from '../img/Logo.svg';
import basket from '../img/basket.svg';
import profile from '../img/profile.svg';

function Header() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <a href="./"><img src={logo} alt="logo" className='header__logo logo'/></a>
        <nav className='header__nav nav'>
          <ul className='nav__list list'>
            <li className='list__item'><a href="./" className='list__link'>Главная</a></li>
            <li className='list__item'><a href="./" className='list__link'>Магазин</a></li>
            <li className='list__item'><a href="./" className='list__link'>Фотоальбом</a></li>
            <li className='list__item'><a href="./" className='list__link'>Новости</a></li>
            <li className='list__item'><a href="./" className='list__link'>Контакты</a></li>
            <li className='list__item'><a href="./" className='list__link'>Отзывы</a></li>
            <li className='list__item'><button className='list__btn btn'><img src={basket} alt="basket" className='basket--icon'/></button></li>
            <li className='list__item'><button className='list__btn btn'><img src={profile} alt="profile" /></button></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
