import './Header.css';

function Header() {
  return (
    <header className='header'>
      <nav className='header__nav nav'>
        <ul className='nav__list list'>
          <li className='list__item'>Home</li>
          <li className='list__item'>Page</li>
          <li className='list__item'>Contact</li>
          <li className='list__item'>Blog</li>
          <li className='list__item'>Review</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
