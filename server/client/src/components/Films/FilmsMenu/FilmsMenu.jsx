import React from 'react'
import LinkMenu from '../../LinkMenu'
import './FilmsMenu.scss'

function MasterFilmsMenu(props) {
    //props
    const  {onShowExplorer, onHideExplorer} = props

    //state
    const listMenu = [
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

    const handleShowExplorer = (e)=>{
        onShowExplorer()
    }


    const handleHideExplorer = (e)=>{
        onHideExplorer()
    }

    const menu = listMenu.map((value, index) => {
        return (
            <LinkMenu className="li-master-films-menu" label={value.label} to={`/films/${value.label.split(' ').join('-').toLowerCase()}`} exact={value.exact} key={index}/>
        )
    })

    return (
        <div className='master-films-header'>
            <div className="master-films-left">
                <p className="avatar" onClick={handleShowExplorer}><img src="/img/background/main-background.jpg" alt="" /></p>
                <div className="master-films-search"  onClick={handleHideExplorer}>
                    <input type="text" name="search" id="" placeholder="Tap to search"/>
                    <i className='fas fa-search'></i>
                </div>
            </div>
            <ul className='master-films-right'  onClick={handleHideExplorer}>
                <LinkMenu className="li-master-films-menu" label="New" to="/films/" exact={true}/>
                { menu }
            </ul>
        </div>
    )
}

export default MasterFilmsMenu