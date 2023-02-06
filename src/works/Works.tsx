import React from 'react';
import w from './Works.module.css'
import c from '../common/styles/container.module.css';

import Work from './work/Work';


const Works = () => {
    return (
        <div className={w.worksBlock}>
            <div className={`${c.container} ${w.worksContainer} `}>
                <h2 className={w.title}>My Works</h2>
                <div className={w.worksRow}>
                    <Work title={'Counter'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eligendi nobis odit perferendis ratione, vero'}/>
                    <Work title={'Social media'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eligendi nobis odit perferendis ratione, vero'}/>
                </div>

            </div>

        </div>
    );
};

export default Works;