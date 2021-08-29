

import React from 'react';
import '../scss/Header.scss';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            slider: [
                "/img/ea1703609f4ca9c77790f45097185cdd.jpeg",
                "/img/godzilla-vs-kong-hero-banner.jpg",
                "/img/Sans-titre-2.jpg",
                "/img/wp8948698.jpg",
                "/img/x-men-first-class-x-men-hellfire-club-movie-banner-01.jpg",
                "/img/banner-it.jpg"
            ],
            slideIndex: "0"
        }
    }

    render() {
        return (
            <div className="header">
                { this.FirstMenu(
                    ['Log in ', <i className="bi bi-box-arrow-right" key={1}></i>], 
                    ['Register ',<i className="bi bi-plus-circle" key={2}></i>], 
                    ['Contact ', <i className="bi bi-chat-dots" key={3}></i>], 
                    ['Introduce ', <i className="bi bi-info-circle" key={4}></i>],
                ) }
                { this.SecondMenu('New', 'Popular', 'Cartoon', 'Romantic', 'Action', 'Comedy', 'Horror') }
                { this.SliderShow() }
            </div>
        )
    }

    componentDidMount() {
        let x = parseInt(this.state.slideIndex) ;
        setInterval(()=>{
            this.setIntervalSlider(x);
            x++;
            if(x >= this.state.slider.length) {
                x = 0;
            }
        }, 2000);
    }

    _li(contents) {
        return contents.map((content, index)=>{
            return (
                <li className="row-menu-li" key={index}>
                    <a href="." className="row-menu-a">{ content }</a>
                </li>
            )
        })
    }

    FirstMenu(...contents){
        return (
            <div className="row-first-menu">
                <div className="row-menu-title">FILMS-<span style={{'fontSize': '4rem'}}>X</span></div>
                <div>
                    <ul>{ this._li(contents) }</ul>
                </div>
            </div>
        )
    }

    SecondMenu(...contents){
        return (
            <div className="row-second-menu">
                <ul>{ this._li(contents) }</ul>
            </div>
        )
    }

    Slider() {
        return this.state.slider.map((slider, index) => {
            return (
                <div className={ index === 0 ? "slider show-slider" : "slider" } key={index}>
                    <img src={ slider } alt =""/>
                </div>
            )
        })
    }

    onClickSlider = (e) => {
        const sliders = document.querySelectorAll('.slider');
        const pointers = document.querySelectorAll('.change-img');
        this.setState({slideIndex: e.target.dataset.img});
        sliders.forEach((slider, index) => {
            if(e.target.dataset.img === index.toString()){
                sliders[index].classList.add('show-slider');
                pointers[index].classList.add('change-color');
            } else{
                sliders[index].classList.remove('show-slider');
                pointers[index].classList.remove('change-color');
            }
        })

    }

    Point(length) {
        let point = [];
        for(let i = 0 ; i < length ; i++) {
            let span = <span className= { i === 0 ? "change-img change-color" : "change-img"} key={i} data-img ={i} onClick= { this.onClickSlider }></span>;
            point.push(span);
        }
        return (
            <div className="row-point-slider">
                { point }
            </div>
        )
    }

    setIntervalSlider(slideIndex) {
        const sliders = document.querySelectorAll('.slider');
        const pointers = document.querySelectorAll('.change-img');
        sliders[slideIndex].classList.add('show-slider');
        pointers[slideIndex].classList.add('change-color');
        sliders.forEach((slider, index) =>{
            if(index !== slideIndex){
                sliders[index].classList.remove('show-slider');
                pointers[index].classList.remove('change-color');
            }
        })
        slideIndex++;
        if(slideIndex === sliders.length){
            slideIndex = 0;
        }
        console.log(slideIndex);
    }

    SliderShow(){ 
        return (
            <div className="row-slider">
                <div className="row-img-slider">{ this.Slider() }</div>
                { this.Point(this.state.slider.length) }
            </div>
        )
    }
}

export default Header;