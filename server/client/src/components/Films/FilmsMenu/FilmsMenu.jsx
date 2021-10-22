import React from 'react'
import LinkMenu from '../../LinkMenu'
import './FilmsMenu.scss'

function MasterFilmsMenu(props) {
    const listMenu = [
        {
            label: 'New',
            exact: false,
        },
        {
            label: 'Popular',
            exact: false,
        },
        {
            label: 'Movies',
            exact: false,
        },
        {
            label: 'Series Movies',
            exact: false,
        },
        {
            label: 'Trailers',
            exact: false,
        },
    ]

    const menu = listMenu.map((value, index) => {
        return (
            <LinkMenu className="li-master-films-menu" label={value.label} to={`/films/${value.label.split(' ').join('-').toLowerCase()}`} exact={value.exact} key={index}/>
        )
    })

    return (
        <div className='master-films-menu'>
            <ul>
                { menu }
            </ul>
        </div>
    )
}

export default MasterFilmsMenu