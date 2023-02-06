import React from 'react';
import s from './Skills.module.css'
import c from '../common/styles/container.module.css'
import Skill from './skill/Skill';

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer} `}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur delectus dicta doloremque iusto praesentium quia soluta voluptatem. '}/>
                    <Skill title={'JS'} description={'Commodi corporis cupiditate distinctio, earum modi numquam quam quidem suscipit veniam veritatis!'}/>
                    <Skill title={'REACT'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta error expedita ipsa quasi quos voluptates.'}/>
                </div>

            </div>
        </div>
    );
};

export default Skills;