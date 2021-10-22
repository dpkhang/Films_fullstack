import React, { useEffect, useState } from 'react'
import './Slider.scss'

function Slider(props) {
    //props
    const {slider} = props

    //state
    const [images, setImages] = useState(slider)

    useEffect(()=>{
        let interval
        function Slider() {
            let choice = 0
            interval = setInterval(()=>{
                const choseImage = images.map((img, idx)=>{
                    if(idx === choice){
                        return {...img, active: 1}
                    }else{
                        return {...img, active: 0}
                    }
                })
                setImages(choseImage)
                choice++
                if(choice === images.length)
                    choice=0
            }, 2000);
        }
        Slider()
        return ()=>{
            clearInterval(interval)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let listImage= images.map((image, index) => {
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

export default Slider