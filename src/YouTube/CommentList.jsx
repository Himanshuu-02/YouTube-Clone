import React from 'react'
import FirstComment from './FirstComment'

const CommentList = ({comments}) => {
     
  return  comments.map((comment)=>(
    <div className=''>
        <FirstComment key={comment.id} data={comment}/>
        <div className='ml-5 border-l border-l-gray-300 pl-5'>
            <CommentList key={comment.id} comments={comment.replies}/>

        </div>
       
    </div> 
  ))
}

export default CommentList