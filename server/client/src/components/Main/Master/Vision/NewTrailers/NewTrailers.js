import React from 'react'
import Items from './Items/Items'
import './NewTrailers.scss'
class NewTrailers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images:[
                {
                    url: '/img/main/it.jpg',
                    title: 'IT'
                },
                {
                    url: '/img/main/avenger.jpg',
                    title: 'Avenger Endgame'
                },
                {
                    url: '/img/main/jurassic.jpg',
                    title: 'Jurassic World'
                },
                {
                    url: '/img/main/kongvsgodzilla.jpg',
                    title: 'Kong vs Godzilla'
                },
                {
                    url: '/img/main/naruto.jpg',
                    title: 'Naruto'
                },
                {
                    url: '/img/main/xmen.jpg',
                    title: 'X-Men'
                },
                {
                    url:'/img/main/theconjuring.jpg',
                    active: 0
                }
            ]
        }
    }

    onClickPrevious = e=>{
        let element = e.target.parentNode.nextSibling.firstChild;
        let left = element.offsetLeft + 1200;
        if(left > 0)
            e.preventDefault();
        else {
            element.style.left = left + 'px'
            console.log([e.target.parentNode.nextSibling.firstChild])
        }
    }

    onClickNext= e => {
        let element = e.target.parentNode.nextSibling.firstChild;
        let left = element.offsetLeft - 1200;
        if(left < -1500)
            e.preventDefault();
        else {
            element.style.left = left + 'px';
            console.log([e.target.parentNode.nextSibling.firstChild]);
        }
    }

    render() {
        let item = this.state.images.map((image, idx)=>{
            return (
                <Items url={image.url} title={image.title}/>
            )
        })
        return (
            <div className='new-trailers'>
                <p className='title'>NEW TRAILERS</p>
                <div className='next-and-previous'>
                    <i className="fas fa-chevron-left" onClick={this.onClickPrevious}></i>
                    <i className="fas fa-chevron-right" onClick={this.onClickNext}></i>
                </div>
                <div className='item-block'>
                    <div className='show-item'>
                        {item}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewTrailers
