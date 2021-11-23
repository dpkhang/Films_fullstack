import React, {useState, useEffect} from 'react'
import UpdateProfile from '../Profile/UpdateProfile/UpdateProfile'
import Frame from '../Profile/Frame/Frame'
import {useHistory} from 'react-router-dom'
import Cookies from 'universal-cookie'
import {getUserById} from '../../API/ConnectAPI'
import './Profile.scss'

function Profile(props) {

    //state
    const [user, setUser] = useState({
        username: '',
        name: '',
        email: '',
        phone: ''
    })

    //hook
    const history = useHistory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const cookies = new Cookies()

    useEffect(()=>{
        (async function(){
            try {
                const uid = cookies.get('uid')
                if(uid){
                    const result = await getUserById(uid)
                    if(result.status === 200){
                        const data = result.data.data[0]
                        const mergeUser = {
                            username: data.username,
                            name: data.first_name === null && data.last_name === null ? data.username : data.first_name + ' ' + data.last_name,
                            email: data.email,
                            phone: data.phone,
                        }
                        setUser(mergeUser)
                    }
                }else {
                    cookies.remove('accessToken')
                    history.push('/')
                }
            }catch(err){
                alert('This page is failed!')
                cookies.remove('accessToken')
                history.push('/')
            }
        })()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="profile">
            <UpdateProfile user={user}/>
            <Frame/>
        </div>
    );
}

export default Profile