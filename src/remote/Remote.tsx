import React from 'react';
import r from './Remote.module.css'
import c from '../common/styles/container.module.css';
import w from '../works/Works.module.css';

const Remote = () => {
    return (
        <div className={r.remoteBlock}>
            <div className={`${c.container} ${r.remoteContainer} `}>
                <div className={r.row}>
                    <h2 className={r.titleRemote}>Рассматриваю вариант удаленной работы</h2>
                    <button className={r.button}>нанять меня</button>
                </div>
            </div>
        </div>

    );
};

export default Remote;