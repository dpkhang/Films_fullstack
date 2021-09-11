import React from 'react'
import Items from '../Items/Items'
import './Actor.scss'
import {Link} from 'react-router-dom'
class Actor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actors: [
                {
                    src: '/img/actors/ngothanhvan.jpg',
                    width:'13',
                    height: '19',
                    name: 'Ngo Thanh Van',
                    nationality: 'VietNamese'
                },
                {
                    src: '/img/actors/robert.jpg',
                    width: '14',
                    height: '21',
                    name: 'Robert Downey Jr.',
                    nationality: 'American'
                },
                {
                    src: '/img/actors/angeliajolie.jpg',
                    width: '15',
                    height: '23',
                    name: 'Angelica Jolie',
                    nationality: 'American'
                },
                {
                    src: '/img/actors/Chris.jpeg',
                    width: '14',
                    height: '21',
                    name: 'Chris Evans',
                    nationality: 'American'
                },
                {
                    src: '/img/actors/Dwayne.jpg',
                    width: '13',
                    height: '19',
                    name: 'Dwayne Johnson',
                    nationality: 'American'
                }
            ]
        }
    }

    render() {
        const data = this.state.actors.map((actor, index)=>{
            return (
                <Items width={actor.width} height={actor.height} src={actor.src} name={actor.name} nationality={actor.nationality} key={index}/>
            )
        })

        return (
            <div className='actor'>
                <p>Actors</p>
                <div className='popular-actor'>
                   {data}
                </div>
                <Link className='more' to='/films/actors'>More</Link>
            </div>
        )
    }
}

export default Actor