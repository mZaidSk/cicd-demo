import React from "react";
import Navbar from "./Navbar";
import { primary } from "../../color";

const Layout = ({ children }) => {
    return (
        <div
            className={`min-h-screen bg-primary text-gray-100 font-sans selection:bg-blue-500 selection:text-white`}
        >
            <div className="max-w-2xl mx-auto px-4 py-8 md:py-16 pb-24 md:pb-8">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Todo App
                    </h1>
                    <p className="text-gray-400 mt-2">
                        Manage your tasks efficiently
                    </p>
                </header>

                <Navbar />

                <main className="mt-6 md:mt-0">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
