import React from 'react'
import'./FilmsFilter.scss'

class FilmsFilter extends React.Component {
    render() {
        return (
            <div className='films-filter'>
                <select className='select-filter'>
                    <option>----Sort----</option>
                    <option>See</option>
                    <option>Alphabet</option>
                </select>
                <select className='select-filter'>
                    <option>----Year----</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2029</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                </select>
                <select className='select-filter'>
                    <option>----Country----</option>
                    <option>Vietnam</option>
                    <option>USA</option>
                    <option>China</option>
                    <option>Korea</option>
                    <option>HongKong</option>
                </select>
                <select className='select-filter'>
                    <option>----Status----</option>
                    <option>Played</option>
                    <option>Playing</option>
                </select>
                <select className='select-filter'>
                    <option>----Category----</option>
                    <option>Comedy</option>
                    <option>Horror</option>
                    <option>Action</option>
                    <option>Romantic</option>
                    <option>Cartoon</option>
                </select>
                <button>Search</button>
            </div>
        )
    }
}

export default FilmsFilter;