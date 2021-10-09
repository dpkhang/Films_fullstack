import React from 'react'
import'./FilmsFilter.scss'
import SelectTag from'../SelectTag/SelectTag'
class FilmsFilter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filterCountry: ['Vietnam', 'Thailand', 'USA', 'China', 'Korea']
        }
    }

    render() {
        return (
            <div className='films-filter'>
                <div className='select-filter'>
                    <SelectTag value={this.state.filterCountry}/>
                    <SelectTag/>
                    <SelectTag/>
                    <SelectTag/>
                    <SelectTag/>
                </div>
                <button>Search</button>
            </div>
        )
    }
}

export default FilmsFilter;