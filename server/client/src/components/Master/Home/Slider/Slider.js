import React from 'react'
import './Slider.scss'
class Slider extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            image:[
                {
                    url:'/img/banner/jurassic-world.jpg',
                    active: 1
                },
                {
                    url:'/img/banner/it.jpg',
                    active: 0
                },
                {
                    url:'/img/banner/avenger-endgame.jpg',
                    active: 0
                },
                {
                    url:'/img/banner/kong-vs-godzilla.jpg',
                    active: 0
                },
                {
                    url:'/img/banner/naruto.jpg',
                    active: 0
                },
                {
                    url:'/img/banner/xmen.jpg',
                    active: 0
                },
            ],
        }
    }

    componentDidMount(){
        let choice = 0;
        setInterval(()=>{
            this.setState(
                preState => {return {
                    image: preState.image.map((image, index)=>{
                        if(index === choice) {
                            return {...image, active: 1}
                        }else {
                            return {...image, active: 0}
                        }
                    })
                }}
            )
            choice++
            if(choice === this.state.image.length)
                choice=0
        }, 2000);
    }
    
    render() {
        let listImage= this.state.image.map((image, index) => {
            return (
                <div className='slider-index' key={index}>
                    <img className={image.active === 1 ? 'active': ''} src={image.url} alt=''/>
                </div>
            )
        })
        return (
            <div className='sliders'>
                <div className='slider-choice'>
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-chevron-right"></i>
                </div>
                {listImage}
            </div>
        );
    }
}

export default Slider