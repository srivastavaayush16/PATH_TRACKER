import './Button.css'
import React from 'react';
const Button = (props) => {

    const addition = props.children === 'Reset' ? 'reset':'fill';
    return(
    <div className='mt-03'> 
        <button className={addition} onClick={props.onClick} >{props.children}</button> 
        </div> )
}

export default Button;