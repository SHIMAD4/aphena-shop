import { useState } from 'react';
import './scss/Home.scss';
import Slider from './Slider';

const types = [
  {
    One: 'Grand Auditorium',
    Two: 'Dreadnought',
    Three: 'Parlor',
  },
  {
    One: 'Travel',
    Two: 'Двенадцатиструнная',
    Three: '3/4',
  },
  {
    One: 'Stratocaster',
    Two: 'Superstrat',
    Three: 'Flying V'
  }
]

const acoustic = [
  'Folk',
  'Parlor',
  'Super Jumbo',
  'Dreadnought',
  'Grand Auditorium',
  'Orchestra',
]

const classic = [
  '3/4',
  '7/8',
  '4/4',
  'Двенадцатиструнная',
  'Семиструнная',
  'Travel',
]

const electro = [
  'Stratocaster',
  'Telecaster',
  'Les Paul',
  'Superstrat',
  'Mockinbird',
  'Warlock',
  'Flying V',
]

const peripherals = [
  'Ремни',
  'Комбоусилитель',
  'Педали',
  'Струны',
  'Каподастры',
]

function createLines(lastLineId) {
  const lines = []
  for (let i = 1; i <= lastLineId; i++) {
    lines.push(<div key={i} className={`line--${i}`}></div>);
  }
  return lines
}

function Home() {
  const lines1 = createLines(7)
  const lines2 = createLines(7)
  const lines3 = createLines(8)
  const lines4 = createLines(6)
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
            <div className='lines-block'>{lines1}</div>
            {acoustic.map(item => <a href="./" className='category__subtitle'>{item}</a>)}
          </div>
          <div className='category__block category__block--2'>
            <h3 className='category__title'>Классические гитары</h3>
            <div className='lines-block'>{lines2}</div>
            {classic.map(item => <a href="./" className='category__subtitle'>{item}</a>)}
          </div>
          <div className='category__block category__block--3'>
            <h3 className='category__title'>Электрогитары</h3>
            <div className='lines-block'>{lines3}</div>
            {electro.map(item => <a href="./" className='category__subtitle'>{item}</a>)}
          </div>
          <div className='category__block category__block--4'>
            <h3 className='category__title'>Периферия</h3>
            <div className='lines-block'>{lines4}</div>
            {peripherals.map(item => <a href="./" className='category__subtitle'>{item}</a>)}
          </div>
        </div>
        <Slider forms={types[0]} />
        <Slider forms={types[1]} />
        <Slider forms={types[2]} />
      </section>
    </div>
  );
}

export default Home;