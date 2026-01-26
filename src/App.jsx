import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import Layout from './components/Layout';
import AllTodos from './pages/AllTodos';
import ActiveTodos from './pages/ActiveTodos';
import CompletedTodos from './pages/CompletedTodos';
import ContactUs from './pages/ContactUs';

function App() {
    return (
        <TodoProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<AllTodos />} />
                        <Route path="/active" element={<ActiveTodos />} />
                        <Route path="/completed" element={<CompletedTodos />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Layout>
            </Router>
        </TodoProvider>
    );
}

export default App;
