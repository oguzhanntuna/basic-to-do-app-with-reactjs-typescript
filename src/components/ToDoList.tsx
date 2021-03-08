import React from 'react';

interface ToDoListProps {
    items: {id: string, text: string}[];
    onDeleteToDo: (id: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = props => {    
    return (
        <ul>
            {props.items.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => props.onDeleteToDo(todo.id)}>DELETE</button>
                </li>
                
            ))}
        </ul>
    );
};

export default ToDoList;