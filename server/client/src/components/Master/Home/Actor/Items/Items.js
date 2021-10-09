import React from 'react'
import {Link} from 'react-router-dom'
import './Items.scss'
class Items extends React.Component {
    constructor(props) {
        super(props)
        this.state = null
    }

    componentDidMount() {
        console.log(this.el);
    }
    render() {
        const style = {
            width: this.props.width ? this.props.width + 'rem' : '18rem',
            height: this.props.height ? this.props.height + 'rem' : '20rem',
        }
        const fontSize = this.props.width ? parseInt(this.props.width)/6:3;
        return (
            <div className='items-films-vision' style={{width: style.width}}>
                <div ref={el=>this.el = el}  className='block' style={style}>
                    <div className='item-flip'>
                        <div className='img-item'>
                            <img src={this.props.src} alt=''/>
                        </div>
                        <div className='content-item'>
                            <p className='title' style={{fontSize: fontSize+'rem'}} title={this.props.name}>{this.props.name}</p>
                            <p className='director' style={{fontSize: fontSize - 1 +'rem'}}>{this.props.nationality}</p>
                            <div className='button'>
                                <Link className='button-link' to=''>See</Link>
                                <Link className='button-link' to=''>Trailer</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Items