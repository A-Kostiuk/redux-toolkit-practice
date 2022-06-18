import React from 'react';
import { removePostsById } from '../features/post/post-slice';
import { useDispatch } from 'react-redux';

const PostItem = ({ title, id }) => {
  const dispatch = useDispatch();
  const removePostHandler = () => {
    dispatch(removePostsById(id));
  };

  return (
    <div
      onClick={removePostHandler}
      className="flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4">
      {title}
    </div>
  );
};

export default PostItem;
