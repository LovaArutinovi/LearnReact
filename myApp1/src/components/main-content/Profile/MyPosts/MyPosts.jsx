import s from './MyPosts.module.css';
import Post from './post/Post';
import React from 'react';



const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.user__post}>
            <h3 className={s.user__postTitle}>My posts</h3>
            <div className={s.user__newPost}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText} placeholder='Enter your text'/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;