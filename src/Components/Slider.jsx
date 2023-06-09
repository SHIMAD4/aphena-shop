import './scss/Home.scss';
import slider_btn from '../assets/slider-btn.svg';
import { useEffect, useState, useRef } from 'react';

function Slider(props) {
    const [translate, setTranslate] = useState(0);
    const blocksRef = useRef()

    useEffect(() => {
        blocksRef.current.style.transform = `translateX(${translate}px)`
    }, [translate]);

    return (
        <div className='slider'>
            <button className='slider__btn btn'>
                <img src={slider_btn} alt="button" className='slider__btn--prev' onClick={() => setTranslate(translate - 300)}/>
            </button>
            <div className='slider__view-box'>
                <div className='slider__box' ref={blocksRef}>
                    <div className='slider__block block'>
                        <p className='block__text'>{props.forms.One}</p>
                    </div>
                    <div className='slider__block block'>
                        <p className='block__text'>{props.forms.Two}</p>
                    </div>
                    <div className='slider__block block'>
                        <p className='block__text'>{props.forms.Three}</p>
                    </div>
                </div>
            </div>
            <button className='slider__btn btn'>
                <img src={slider_btn} alt="button" className='slider__btn--next' onClick={() => setTranslate(translate + 300)}/>
            </button>
        </div>
    );
}

export default Slider;