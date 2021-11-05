import React, { useEffect } from 'react'
import Search from '../Main/Search/Search'
import Ask from '../Main/Ask/Ask'
import Download from '../Main/Download/Download'
import Story from '../Main/Story/Story'
import Enjoy from '../Main/Enjoy/Enjoy'
import Menu from '../Main/Menu/Menu'
import Footer from '../Footer/Footer'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router'

function Main(props) {

    useEffect(()=>{
        document.title = 'Hippo Movies'
    }, [])

    const history = useHistory()

    // if(new Cookies().get('accessToken'))
    //     history.push('/films')

    return (
        <div>   
            <Menu></Menu>
            <Search></Search>
            <Story></Story>
            <Enjoy></Enjoy>
            <Download></Download>
            <Ask></Ask>
            <Footer/>
        </div>
    )
}

export default Main