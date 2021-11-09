import React from "react";
import c from "./Posts.module.scss";
import {Post} from "./Post/Post";
import {Button, Form, Input} from 'antd';


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
        <div className={c.postsContainer}>
            <div className={c.createNewPostContainer}>
                <div className={c.titleContainer}>
                    My Posts
                </div>
                <NewPostForm onSubmit={submitAddNewPost}/>
            </div>
            <div>
                {postsList}
            </div>
        </div>
    );
};

const NewPostForm = React.memo((
    {
        onSubmit
    }
) => {
    return (
        <Form onFinish={onSubmit}>
            <Form.Item name={'newPostText'} rules={[
                {required: true, message: "Field is required!"},
                {max: 20, message: 'Max length of post is 20 symbols!'}
            ]}>
                <Input.TextArea placeholder={'Add new post...'}/>
            </Form.Item>
            <div className={c.buttonContainer}>
                <Button type='primary' htmlType='submit'>
                    Post
                </Button>
            </div>
        </Form>
    )
});
