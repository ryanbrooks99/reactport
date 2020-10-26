import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => { 
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <a href="https://drive.google.com/file/d/18cLH74oIpPBVZfzL8Kq8_AxByRRay-pf/view?usp=sharing" target='_blank' className='btn-mobile'>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </a>
    )
};