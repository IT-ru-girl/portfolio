import React from 'react';
import n from './Nav.module.css'

const Nav = () => {
    return (
        <div className={n.nav}>
            <a className={n.a} href="#">Главная</a>
            <a className={n.a} href="#">Скиллы</a>
            <a className={n.a} href="#">Проекты</a>
            <a className={n.a} href="#">Контакты</a>
        </div>
    );
};

export default Nav;