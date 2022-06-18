import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleCompletedTodo } from '../features/todo/todo-slice';

const TodoItem = ({ text, completed, id }) => {
  const dispatch = useDispatch();

  const toggleTodoHandler = () => {
    dispatch(toggleCompletedTodo(id));
  };

  const removeTodoHandler = () => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="flex justify-between items-center my-2">
      <div
        className="text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400"
        onClick={toggleTodoHandler}
      >
        Complete
      </div>
      <div className={`text-sm ${completed ? 'line-through font-medium text-lime-400' : ''}`}>
        {text}
      </div>
      <div
        className="text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer"
        onClick={removeTodoHandler}
      >
        Delete
      </div>
    </div>
  );
};

export default TodoItem;
