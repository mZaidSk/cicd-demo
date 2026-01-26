import React from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from '../components/TodoItem';
import TodoInput from '../components/TodoInput';

const ActiveTodos = () => {
    const { todos } = useTodo();
    const activeTodos = todos.filter((todo) => !todo.completed);

    return (
        <>
            <TodoInput />
            <div className="space-y-2">
                {activeTodos.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                        <p>No active tasks. You're all caught up!</p>
                    </div>
                ) : (
                    activeTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
                )}
            </div>
        </>
    );
};

export default ActiveTodos;
