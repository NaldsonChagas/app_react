import React from 'react'
import TodoListItem from './TodoListItem';


const TodoList = (props) => {
  const { items } = props;
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <TodoListItem key={index} item={item.title}
          index={index} removeFromItems={props.removeFromItems} />
      ))}
    </ul>
  );
};

export default TodoList;