import React from 'react';
import PropTypes from 'prop-types';
import Comments from "./comments/Comments";

function Post({ id, title, removePost }) {
    return (
        <>
        <div className="Post">
            <button className="Post__delete" onClick={() => removePost(id)}>DELETE</button>
            <div className="Input__header">user1</div>
            <div className="Post__title">{title}</div>
            <Comments currentUserId="1"/>
        </div>
        </>
    );
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    removePost: PropTypes.func.isRequired
};

export default Post;