import React from 'react'
import './Avatar.css'

const Avatar = (props) =>  {
    return (
        <div className='Avatar'>
            <img alt='avatar' className='user-img' src={props.user.avatarurl} />
        </div>
    )
}

export default Avatar