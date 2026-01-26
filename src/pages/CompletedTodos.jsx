import React from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from '../components/TodoItem';

const CompletedTodos = () => {
    const { todos } = useTodo();
    const completedTodos = todos.filter((todo) => todo.completed);

    return (
        <>
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-300">Completed Tasks</h2>
            </div>
            <div className="space-y-2">
                {completedTodos.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                        <p>No completed tasks yet.</p>
                    </div>
                ) : (
                    completedTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
                )}
            </div>
        </>
    );
};

export default CompletedTodos;
