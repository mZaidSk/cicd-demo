import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTodo } from '../context/TodoContext';

const TodoInput = () => {
    const [text, setText] = useState('');
    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 relative">
            <div className="relative">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What needs to be done?"
                    className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg py-4 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-lg text-lg"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!text.trim()}
                >
                    <Plus size={24} />
                </button>
            </div>
        </form>
    );
};

export default TodoInput;
