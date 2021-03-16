import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';


const BackBtn = ({ children, ...otherProps }) => {
    return (
       <Link className="btnback" {...otherProps}>{children}</Link>
    )
}

export default BackBtn;