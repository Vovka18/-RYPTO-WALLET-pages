import React from 'react'
import './push-message.css'
import {ReactComponent as Arrow} from '../../../img/arrow-push-message.svg'

const PushMessage = ({msg}) => {
  return (
    <div className='push-message'>
        <Arrow/>
        <h2>{msg}</h2>
    </div>
  )
}

export default PushMessage