import React from 'react';
import { Trash2, Check, Square } from 'lucide-react';
import { useTodo } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
    const { toggleTodo, deleteTodo } = useTodo();

    return (
        <div
            className="group flex items-center justify-between p-4 bg-gray-800 border border-gray-700 rounded-lg mb-3 shadow-sm hover:shadow-md transition-all animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
            <div className="flex items-center space-x-4 flex-1">
                <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`flex-shrink-0 transition-colors ${todo.completed ? 'text-green-500' : 'text-gray-500 hover:text-gray-400'
                        }`}
                >
                    {todo.completed ? <Check size={24} /> : <Square size={24} />}
                </button>
                <span
                    className={`text-lg transition-all flex-1 break-words ${todo.completed
                            ? 'text-gray-500 line-through decoration-2 decoration-gray-600'
                            : 'text-gray-100'
                        }`}
                >
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="text-gray-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-2 rounded-md hover:bg-gray-700 focus:opacity-100"
                aria-label="Delete todo"
            >
                <Trash2 size={20} />
            </button>
        </div>
    );
};

export default TodoItem;
