import React from 'react';
import contact from './Contact.module.css'
import c from '../common/styles/container.module.css';
import r from '../remote/Remote.module.css';
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

                <div>
                    <button className={contact.button}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;