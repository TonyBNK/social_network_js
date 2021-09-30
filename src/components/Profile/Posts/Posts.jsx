import React from "react";
import c from "./Posts.module.css";
import {Post} from "./Post/Post";
import {Field, reduxForm} from "redux-form";

export const Posts = (
    {
        posts,
        addNewPost
    }
) => {
    const postsList = posts.map(p =>
        <Post
            id={p.id}
            ava={p.ava}
            post={p.post}
            likesCount={p.likesCount}
        />
    )

    const submitAddNewPost = (values) => addNewPost(values.newPostText);

    return (
        <div className={c.allPosts}>
            <h3 className={c.title}>
                My Posts
            </h3>
            <NewPostReduxForm onSubmit={submitAddNewPost}/>
            <div>
                {postsList}
            </div>
        </div>
    );
};

const NewPostForm = (
    {
        handleSubmit
    }
) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    type={'text'}
                    placeholder={'Add new post...'}
                    name={'newPostText'}
                />
            </div>
            <div>
                <button>
                    Send
                </button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({
    form: 'newPost'
})(NewPostForm);