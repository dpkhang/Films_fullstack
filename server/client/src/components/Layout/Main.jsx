import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Login from '../Main/Search/Search'
import Ask from '../Main/Ask/Ask'
import Download from '../Main/Download/Download'
import Story from '../Main/Story/Story'
import Enjoy from '../Main/Enjoy/Enjoy'
import Menu from '../Main/Menu/Menu'
import Footer from '../Footer/Footer'
Main.propTypes = {
    
}

function Main(props) {

    useEffect(()=>{
        document.title = 'Hippo Movies'
    }, [])

    return (
        <div>   
            <Menu></Menu>
            <Login></Login>
            <Story></Story>
            <Enjoy></Enjoy>
            <Download></Download>
            <Ask></Ask>
            <Footer/>
        </div>
    )
}

export default Main