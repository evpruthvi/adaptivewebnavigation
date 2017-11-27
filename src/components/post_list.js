import React, {Component} from 'react';
import PostListItem from './post_list_item';

const PostList = (props) => {
    console.log(props.posts);
     
    const postItems = props.posts.map((post)=>{
        return <PostListItem key= {post._id}  post={post} />
    });

    return (
        <ul className = "col-md-4 list-group">
            {postItems}
        </ul>
    );
};

export default PostList;
