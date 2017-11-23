import React, {Component} from 'react';
import AnswerListItem from './answer_list_item';

const AnswerList = (props) => {

  const postItems = props.aposts.map((post)=>{
    return <AnswerListItem key= {post._id}  post={post} />
  });

  return (
    <ul className = "col-md-4 list-group">
      {postItems}
    </ul>
  );
};

export default AnswerList;
