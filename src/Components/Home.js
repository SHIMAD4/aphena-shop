import './css/Home.css';
import slider_btn from '../img/slider-btn.svg';

function Home() {
  return (
    <div className='wrapper'>
      <section className='home'>
        <h1 className='heading'>Страница с категориями</h1>
        <div className='advertisement'>
          <p className='advertisement__discription'>Рекламный баннер</p>
        </div>
        <div className='category'>
          <div className='category__block category__block--1'>
            <h3 className='category__title'>Акустические гитары</h3>
            <div className='lines-block'>
              <div className='line--1'></div>
              <div className='line--2'></div>
              <div className='line--3'></div>
              <div className='line--4'></div>
              <div className='line--5'></div>
              <div className='line--6'></div>
              <div className='line--7'></div>
            </div>
            <a href="./" className='category__subtitle'>Folk</a>
            <a href="./" className='category__subtitle'>Parlor</a>
            <a href="./" className='category__subtitle'>Super Jumbo</a>
            <a href="./" className='category__subtitle'>Dreadnought</a>
            <a href="./" className='category__subtitle'>Grand Auditorium</a>
            <a href="./" className='category__subtitle'>Orchestra</a>
          </div>
          <div className='category__block category__block--2'>
            <h3 className='category__title'>Классические гитары</h3>
            <div className='lines-block'>
              <div className='line--1'></div>
              <div className='line--2'></div>
              <div className='line--3'></div>
              <div className='line--4'></div>
              <div className='line--5'></div>
              <div className='line--6'></div>
              <div className='line--7'></div>
            </div>
            <a href="./" className='category__subtitle'>3/4</a>
            <a href="./" className='category__subtitle'>7/8</a>
            <a href="./" className='category__subtitle'>4/4</a>
            <a href="./" className='category__subtitle'>Двенадцатиструнная</a>
            <a href="./" className='category__subtitle'>Семиструнная</a>
            <a href="./" className='category__subtitle'>Travel</a>
          </div>
          <div className='category__block category__block--3'>
            <h3 className='category__title'>Электрогитары</h3>
            <div className='lines-block'>
              <div className='line--1'></div>
              <div className='line--2'></div>
              <div className='line--3'></div>
              <div className='line--4'></div>
              <div className='line--5'></div>
              <div className='line--6'></div>
              <div className='line--7'></div>
              <div className='line--8'></div>
            </div>
            <a href="./" className='category__subtitle'>Stratocaster</a>
            <a href="./" className='category__subtitle'>Telecaster</a>
            <a href="./" className='category__subtitle'>Les Paul</a>
            <a href="./" className='category__subtitle'>Superstrat</a>
            <a href="./" className='category__subtitle'>Mockinbird</a>
            <a href="./" className='category__subtitle'>Warlock</a>
            <a href="./" className='category__subtitle'>Flying V</a>
          </div>
          <div className='category__block category__block--4'>
            <h3 className='category__title'>Периферия</h3>
            <div className='lines-block'>
              <div className='line--1'></div>
              <div className='line--2'></div>
              <div className='line--3'></div>
              <div className='line--4'></div>
              <div className='line--5'></div>
              <div className='line--6'></div>
            </div>
            <a href="./" className='category__subtitle'>Ремни</a>
            <a href="./" className='category__subtitle'>Комбоусилитель</a>
            <a href="./" className='category__subtitle'>Педали</a>
            <a href="./" className='category__subtitle'>Струны</a>
            <a href="./" className='category__subtitle'>Каподастры</a>
          </div>
        </div>
        <div className='slider'>
          <button className='slider__btn slider__btn--prev btn'><img src={slider_btn} alt="button" /></button>
          <div className='slider__block block'>
            <p className='block__text'>Grand Auditorium</p>
          </div>
          <div className='slider__block block'>
            <p className='block__text'>Dreadnought</p>
          </div>
          <div className='slider__block block'>
            <p className='block__text'>Parlor</p>
          </div>
          <button className='slider__btn slider__btn--next btn'><img src={slider_btn} alt="button" /></button>
        </div>
        <div className='slider'>
          <button className='slider__btn slider__btn--prev btn'><img src={slider_btn} alt="button" /></button>
          <div className='slider__block block'>
            <p className='block__text'>Travel</p>
          </div>
          <div className='slider__block block'>
            <p className='block__text'>Двенадцатиструнная</p>
          </div>
          <div className='slider__block block'>
            <p className='block__text'>3/4</p>
          </div>
          <button className='slider__btn slider__btn--next btn'><img src={slider_btn} alt="button" /></button>
        </div>
        <div className='slider'>
          <button className='slider__btn slider__btn--prev btn'><img src={slider_btn} alt="button" /></button>
          <div className='slider__block block'>
            <p className='block__text'>Stratocaster</p>
          </div>
          <div className='slider__block block'>
            <p className='block__text'>Superstrat</p>
          </div>
          <div className='slider__block block'>
            <p className='block__text'>Flying V</p>
          </div>
          <button className='slider__btn slider__btn--next btn'><img src={slider_btn} alt="button" /></button>
        </div>
      </section>
    </div>
  );
}

export default Home;
