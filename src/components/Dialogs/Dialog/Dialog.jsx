import React from 'react';
import classes from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    let path = '/dialogs/' + props.link;
    return (
        <div className={classes.name}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;