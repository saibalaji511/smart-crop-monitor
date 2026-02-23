import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Home, LayoutDashboard, ScanLine, Users, Settings, LogOut, Sprout } from 'lucide-react';

// Import Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Diagnosis from './pages/Diagnosis';
import ExpertConnect from './pages/ExpertConnect';
import TreatmentLogs from './pages/TreatmentLogs';

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // If the user is NOT authenticated, show the Login page
    if (!isAuthenticated) {
        return (
            <Router>
                <Routes>
                    <Route path="*" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
                </Routes>
            </Router>
        );
    }

    // --- THEME COLORS ---
    const colors = {
        sidebarBg: '#2d6a4f',    // Deep forest green
        mainBg: '#f8f6f0',       // Soft cream
        activeText: '#2d6a4f',
        inactiveText: 'rgba(255, 255, 255, 0.7)',
    };

    return (
        <Router>
            {/* We use embedded CSS here to handle the seamless overlap effect 
        between the sidebar active links and the main content area.
      */}
            <style>{`
        body { margin: 0; padding: 0; background-color: ${colors.sidebarBg}; font-family: 'Inter', sans-serif; }
        
        .app-container { 
          display: flex; 
          height: 100vh; 
          overflow: hidden; 
          background-color: ${colors.sidebarBg}; 
        }
        
        .sidebar { 
          width: 260px; 
          display: flex; 
          flex-direction: column; 
          padding: 2rem 0 2rem 1.5rem; /* No padding on the right to allow seamless tabs */
          color: white; 
        }
        
        .nav-link { 
          display: flex; 
          align-items: center; 
          gap: 1rem; 
          padding: 1rem 1.5rem; 
          color: ${colors.inactiveText}; 
          text-decoration: none; 
          font-weight: 600; 
          border-radius: 24px 0 0 24px; /* Rounded only on the left */
          margin-bottom: 0.25rem; 
          transition: all 0.2s;
        }
        
        .nav-link:hover { color: white; }
        
        .nav-link.active { 
          background-color: ${colors.mainBg}; 
          color: ${colors.activeText}; 
        }
        
        .main-content { 
          flex: 1; 
          background-color: ${colors.mainBg}; 
          border-radius: 32px 0 0 32px; /* Large rounded corners on the left */
          overflow-y: auto; 
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
        }

        /* Clean Scrollbar */
        .main-content::-webkit-scrollbar { width: 8px; }
        .main-content::-webkit-scrollbar-thumb { background-color: #d1d5db; border-radius: 4px; }
      `}</style>

            <div className="app-container">
                {/* --- SIDEBAR --- */}
                <aside className="sidebar">

                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem', fontSize: '1.5rem', fontWeight: '800', paddingRight: '1.5rem' }}>
                        <Sprout size={28} /> AgriSmart
                    </div>

                    {/* Profile Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem', textAlign: 'center', paddingRight: '1.5rem' }}>
                        <img
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
                            alt="Profile"
                            style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.2)', marginBottom: '0.75rem' }}
                        />
                        <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>Saroj Nadar</span>
                        <span style={{ fontSize: '0.85rem', color: colors.inactiveText }}>Farm manager</span>
                    </div>

                    {/* Navigation Links */}
                    <nav style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <NavLink to="/home" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            <Home size={20} /> Home
                        </NavLink>
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            <LayoutDashboard size={20} /> Dashboard
                        </NavLink>
                        <NavLink to="/diagnosis" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            <ScanLine size={20} /> AI Diagnosis
                        </NavLink>
                        <NavLink to="/expert" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            <Users size={20} /> Expert Connect
                        </NavLink>
                        <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            <Settings size={20} /> Settings
                        </NavLink>
                    </nav>

                    {/* Promo Card */}
                    <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1.25rem', borderRadius: '16px', marginBottom: '1.5rem', marginRight: '1.5rem' }}>
                        <p style={{ fontSize: '0.85rem', lineHeight: '1.4', marginBottom: '1rem', color: 'rgba(255,255,255,0.9)' }}>
                            You can manage multiple farms here
                        </p>
                        <button style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: 'none', backgroundColor: 'white', color: colors.sidebarBg, fontWeight: '700', cursor: 'pointer' }}>
                            + Add farm
                        </button>
                    </div>

                    {/* Logout Button */}
                    <div style={{ paddingRight: '1.5rem' }}>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: '#fca5a5', cursor: 'pointer', fontWeight: '600', padding: '0.5rem 0', width: '100%' }}
                        >
                            <LogOut size={20} /> Sign Out
                        </button>
                    </div>
                </aside>

                {/* --- MAIN CONTENT AREA --- */}
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
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