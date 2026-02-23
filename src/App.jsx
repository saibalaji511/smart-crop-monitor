import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Home, LayoutDashboard, ScanLine, Users, Settings, LogOut, Sprout } from 'lucide-react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Diagnosis from './pages/Diagnosis';
import ExpertConnect from './pages/ExpertConnect';
import TreatmentLogs from './pages/TreatmentLogs';

export default function App() {
    // Store user data instead of just a boolean
    const [user, setUser] = useState(null);

    if (!user) {
        return (
            <Router>
                <Routes>
                    <Route path="*" element={<Login onLogin={(userData) => setUser(userData)} />} />
                </Routes>
            </Router>
        );
    }

    const colors = { sidebarBg: '#2d6a4f', mainBg: '#f8f6f0', activeText: '#2d6a4f', inactiveText: 'rgba(255, 255, 255, 0.7)' };

    return (
        <Router>
            <style>{`
        body { margin: 0; padding: 0; background-color: ${colors.sidebarBg}; font-family: 'Inter', sans-serif; }
        .app-container { display: flex; height: 100vh; overflow: hidden; background-color: ${colors.sidebarBg}; }
        .sidebar { width: 260px; display: flex; flexDirection: column; padding: 2rem 0 2rem 1.5rem; color: white; }
        .nav-link { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.5rem; color: ${colors.inactiveText}; text-decoration: none; font-weight: 600; border-radius: 24px 0 0 24px; margin-bottom: 0.25rem; transition: all 0.2s; }
        .nav-link:hover { color: white; }
        .nav-link.active { background-color: ${colors.mainBg}; color: ${colors.activeText}; }
        .main-content { flex: 1; background-color: ${colors.mainBg}; border-radius: 32px 0 0 32px; overflow-y: auto; box-shadow: -10px 0 30px rgba(0,0,0,0.1); }
        .main-content::-webkit-scrollbar { width: 8px; }
        .main-content::-webkit-scrollbar-thumb { background-color: #d1d5db; border-radius: 4px; }
      `}</style>

            <div className="app-container">
                <aside className="sidebar">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem', fontSize: '1.5rem', fontWeight: '800', paddingRight: '1.5rem' }}>
                        <Sprout size={28} /> AgriSmart
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem', textAlign: 'center', paddingRight: '1.5rem' }}>
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" alt="Profile" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.2)', marginBottom: '0.75rem' }} />
                        {/* Dynamic User Name here */}
                        <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>{user.name}</span>
                        <span style={{ fontSize: '0.85rem', color: colors.inactiveText }}>Farm manager</span>
                    </div>

                    <nav style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}><LayoutDashboard size={20} /> Dashboard</NavLink>
                        <NavLink to="/diagnosis" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}><ScanLine size={20} /> AI Diagnosis</NavLink>
                        <NavLink to="/expert" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}><Users size={20} /> Expert Connect</NavLink>
                        <NavLink to="/logs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}><Settings size={20} /> Settings</NavLink>
                    </nav>

                    <div style={{ paddingRight: '1.5rem', marginTop: 'auto' }}>
                        <button onClick={() => setUser(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: '#fca5a5', cursor: 'pointer', fontWeight: '600', padding: '0.5rem 0', width: '100%' }}>
                            <LogOut size={20} /> Sign Out
                        </button>
                    </div>
                </aside>

                <main className="main-content">
                    <Routes>
                        {/* Pass the userName down to the Dashboard as a prop */}
                        <Route path="/" element={<Dashboard userName={user.name} />} />
                        <Route path="/diagnosis" element={<Diagnosis />} />
                        <Route path="/expert" element={<ExpertConnect />} />
                        <Route path="/logs" element={<TreatmentLogs />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}