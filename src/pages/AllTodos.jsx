import React from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from '../components/TodoItem';
import TodoInput from '../components/TodoInput';

const AllTodos = () => {
    const { todos } = useTodo();

    return (
        <>
            <TodoInput />
            <div className="space-y-2">
                {todos.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                        <p>No tasks yet. Add one above!</p>
                    </div>
                ) : (
                    todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
                )}
            </div>
        </>
    );
};

export default AllTodos;
