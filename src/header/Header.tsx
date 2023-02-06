import React from 'react';
import h from  './Header.module.css'
import Nav from '../nav/Nav';

const Header = () => {
    return (
        <div className={h.header}>
            <Nav/>
        </div>
    );
};

export default Header;