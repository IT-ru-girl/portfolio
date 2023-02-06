import React from 'react';


import f from './Footer.module.css'
import c from '../common/styles/container.module.css';
import contact from '../contact/Contact.module.css';

const Footer = () => {
    return (
        <div className={f.block}>
            <div className={`${c.container} ${f.container} `}>
                <h2>Ксения</h2>
                <div className={f.row}>
                    <div className={f.some}></div>
                    <div className={f.some}></div>
                    <div className={f.some}></div>
                    <div className={f.some}></div>
                </div>
                <div>&#169; Все права защищены</div>
            </div>

        </div>
    );
};

export default Footer;