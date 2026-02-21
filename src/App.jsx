import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LayoutDashboard, ScanLine, Users, BookOpen, LogOut } from 'lucide-react';

// Import Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Diagnosis from './pages/Diagnosis';
import ExpertConnect from './pages/ExpertConnect';
import TreatmentLogs from './pages/TreatmentLogs';

function App() {
    // State to track if the user is logged in (defaults to false)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // If the user is NOT authenticated, only show the Login page
    if (!isAuthenticated) {
        return (
            <Router>
                <Routes>
                    {/* We pass a function to the Login page so it can tell App.jsx when login is successful */}
                    <Route path="*" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
                </Routes>
            </Router>
        );
    }

    // If the user IS authenticated, show the normal app layout with sidebar
    return (
        <Router>
            <div className="app-container">
                {/* Sidebar Navigation */}
                <nav className="sidebar glass-panel" style={{ backgroundColor: '#1f2937', borderRight: 'none' }}>
                    <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                        <ScanLine className="text-emerald" />
                        AgriSmart
                    </h2>

                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        <LayoutDashboard size={20} /> Dashboard
                    </NavLink>
                    <NavLink to="/diagnosis" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        <ScanLine size={20} /> AI Diagnosis
                    </NavLink>
                    <NavLink to="/expert" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        <Users size={20} /> Expert Connect
                    </NavLink>
                    <NavLink to="/logs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        <BookOpen size={20} /> Treatment Logs
                    </NavLink>

                    {/* Logout Button pushed to the bottom */}
                    <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="nav-link"
                            style={{ width: '100%', background: 'transparent', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#ef4444' }}
                        >
                            <LogOut size={20} /> Sign Out
                        </button>
                    </div>
                </nav>

                {/* Main Content Area */}
                <main className="main-content" style={{ backgroundColor: '#f3f4f6' }}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/diagnosis" element={<Diagnosis />} />
                        <Route path="/expert" element={<ExpertConnect />} />
                        <Route path="/logs" element={<TreatmentLogs />} />
                        {/* Catch-all to redirect unknown routes to the dashboard */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;