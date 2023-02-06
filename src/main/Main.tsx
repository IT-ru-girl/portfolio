import React from 'react';
import m from './Main.module.css'
import c from '../common/styles/container.module.css'

const Main = () => {
    //возьмет все пустое пространство разделит его пополам и раскинет на 2 части
    return (
        <div className={m.mainBlock}>
            <div className={c.container}>
                <div className={m.text}>
                    <span>Hi</span>
                    <h1>I am Ksu</h1>
                    <p>frontend developer</p>
                </div>
                <div className={m.photo}></div>
            </div>

        </div>
    );
};

export default Main;