import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Post/Posts';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postsElement = props.p.map((el) => {
        return (
            <Posts massage={el.message} likes={el.likes} />
        );
    });

    let NewPost = React.createRef()

    let AddPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let OnPostChange = () => {
        let text = NewPost.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }
    return (
        <div className={classes.postsBlok}>
            <p>My Posts</p>
            <div>
                <textarea onChange={OnPostChange} ref={NewPost} value={props.newPostText}></textarea>
            </div>
            <div className={classes.button}>
                <button onClick={AddPost}>Post</button>
            </div>
            {postsElement}
        </div>
    );
}

export default MyPosts;
