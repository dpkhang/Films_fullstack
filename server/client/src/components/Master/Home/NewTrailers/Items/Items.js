import React from 'react'
import './Items.scss'
import {Link} from 'react-router-dom'
class Item extends React.Component {

    onMouseOverHandling = (e) =>{
        e.target.nextSibling.classList.add('active');
        e.target.nextSibling.nextSibling.firstChild.classList.add('scale-img');
    }

    onMouseOutHandling = (e) =>{
        e.target.nextSibling.classList.remove('active');
        e.target.nextSibling.nextSibling.firstChild.classList.remove('scale-img');
    }

    render() {
        return (
            <div className= 'item' onMouseOver= {this.onMouseOverHandling} onMouseOut={this.onMouseOutHandling}>
                <Link to ='/films' title={this.props.title}></Link>
                <i className="fas fa-play-circle"></i>
                <div className='img'>
                    <img src={this.props.url} alt={this.props.title}/> 
                </div>
            </div>
        )
    }
}

export default Item