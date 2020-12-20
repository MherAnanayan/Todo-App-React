import React from 'react';
import  './style.scss';

import Login from './login_logout';

const Header = (props) => {
    return (
        <div className='header-area'>
            <h1 className='header-txt'>{props.title}</h1>
            <Login className='loginorlogout'/>
        </div>
    )
}

export default Header;