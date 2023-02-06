import React from 'react';
import skill from './Skill.module.css'


type SkillType={
    title: string
    description: string
}

const Skill = (props: SkillType) => {
    return (
        <div className={skill.skill}>
            <div className={skill.icon}></div>
            <h3 className={skill.title}>{props.title}</h3>
            <span className={skill.description}>{props.description}</span>
        </div>
    );
};

export default Skill;