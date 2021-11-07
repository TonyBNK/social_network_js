import React from "react";
import c from "./Posts.module.scss";
import {Post} from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/forms-controls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength20 = maxLengthCreator(20);

export const Posts = (
    {
        posts,
        addNewPost
    }
) => {
    const postsList = posts.map(p =>
        <Post
            key={p.id}
            ava={p.ava}
            name={p.name}
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

const NewPostForm = React.memo((
    {
        handleSubmit
    }
) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    placeholder={'Add new post...'}
                    name={'newPostText'}
                    validate={[required, maxLength20]}
                />
            </div>
            <div>
                <button>
                    Send
                </button>
            </div>
        </form>
    )
});

const NewPostReduxForm = reduxForm({
    form: 'newPost'
})(NewPostForm);
