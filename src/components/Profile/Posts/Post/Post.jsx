import React, {createElement, useState} from 'react';
import {Comment, Tooltip, Avatar} from 'antd';
import moment from 'moment';
import {
    DislikeOutlined,
    LikeOutlined,
    DislikeFilled,
    LikeFilled
} from '@ant-design/icons';
import c from "./Post.module.scss";


export const Post = (
    {
        ava,
        name,
        post,
        likesCount
    }
) => {
    const dislikesCount = 0;

    const [likes, setLikes] = useState(likesCount);
    const [dislikes, setDislikes] = useState(dislikesCount);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(likesCount + 1);
        setDislikes(dislikesCount);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(likesCount);
        setDislikes(dislikesCount + 1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <div className={c.commentContainer}>
            <Comment
                actions={actions}
                author={<a>{name || 'TonyBNK'}</a>}
                avatar={<Avatar src={ava} alt="ava"/>}
                content={
                    <p>
                        {post}
                    </p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
        </div>
    );
}