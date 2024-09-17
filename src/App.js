import React from 'react';
import TaskList from './components/TaskList';
import './index.css';
import './styles.css'; // Import the custom styles

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Main content area */}
            <main className="p-6">
                {/* Header section */}
                <header className="flex justify-end items-center bg-white p-4 shadow mb-4">
                  <table>{/*table content */}</table>
                    <div className="text-right">
                        <h2 className="font-bold">Admin Name</h2>
                        <p>Tech Team</p>
                    </div>
                </header>

                {/* TaskList Component */}
                <TaskList />
            </main>
        </div>
    );
};

export default App;