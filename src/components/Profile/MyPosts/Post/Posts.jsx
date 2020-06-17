import React from 'react';
import classes from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img src="https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600" />
                {props.massage}
            </div>
            <div>
                {props.likes}
            </div>
        </div>

    );
}

export default Posts;
