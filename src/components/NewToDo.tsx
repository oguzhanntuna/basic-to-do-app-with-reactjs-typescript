import React, { useRef } from 'react';

type NewToDoProps = {   // Should be interface for best practice but type also works.
    onAddToDo: (text: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const toDoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddToDo(enteredText);
    };

    return (
        <form onSubmit={toDoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
};

export default NewToDo;