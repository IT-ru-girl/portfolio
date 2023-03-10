import React from 'react';
import work from './Work.module.css'


type WorkType = {
    title: string,
    description: string
}
const Work = (props: WorkType) => {
    return (
        <div className={work.workItem}>
            <div className={work.photoContainer}>
                <a href='#' className={work.button}>Смотреть</a>
            </div>
            <div className={work.description}>
                <h3 className={work.title}>{props.title}</h3>
                <span className={work.text}>{props.description}</span>
            </div>
        </div>
    );
};

export default Work;