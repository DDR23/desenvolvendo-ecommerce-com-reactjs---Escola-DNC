import React from 'react'
import logoDNC from '../../assets/logo-dnc.png';
import './index.scss'


const Header = () => {
  return (
    <div className='header'>
        <img src={logoDNC} alt="" />
    </div>
  )
}

export default Header