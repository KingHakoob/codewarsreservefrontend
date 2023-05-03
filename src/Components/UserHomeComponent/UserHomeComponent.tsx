import React from 'react'
import logout from '../../Assets/log-out.png';
import '../UserHomeComponent/UserHomeComponent.css'

function UserHomeComponent() {
  return (
    <div>
        <div className='log-out'>
            <p><img src={logout}/>Log Put</p>
        </div>
    </div>
  )
}

export default UserHomeComponent