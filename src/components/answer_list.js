import React from 'react';
import AnswerListItem from './answer_list_item';

const AnswerList = (props)=>{
    const answerList = props.aposts.map((post)=>{
      return <AnswerListItem key= {post._id}  post={post} />
    });

    return(
      <ul className = "col-md-4 list-group">
        {answerList}
      </ul>
    );

}
export default AnswerList;
