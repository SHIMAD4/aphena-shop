import './scss/Banner.scss';
import bg from '../assets/bg.png';

export default function Banner() {
  return (
    <div className='wrapper'>
      <section className="banner">
        <img src={bg} alt="background" className='banner__bg'/>
        <h1 className='banner__title'>Твоя первая <span>гитара</span> ждет <span>тебя</span></h1>
        <p className='banner__subtitle'>Мы сделаем из вас музыкантов</p>
      </section>
    </div>
  );
}