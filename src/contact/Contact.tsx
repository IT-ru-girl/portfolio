import React from 'react';
import contact from './Contact.module.css'
import c from '../common/styles/container.module.css';
import Input from './Input';

const Contact = () => {
    return (
        <div className={contact.block}>
            <div className={`${c.container} ${contact.container} `}>
                <h2 className={contact.title}>Contact me</h2>

                    <form action="" className={contact.form}>
                        <Input/>
                        <Input/>
                        <textarea/>
                    </form>
                    <a href='#' className={contact.button}>Отправить</a>

            </div>
        </div>
    );
};

export default Contact;