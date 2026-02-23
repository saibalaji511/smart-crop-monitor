import React, { useState } from 'react';
import { Leaf, Lock, Mail, User } from 'lucide-react';

export default function Login({ onLogin }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && password) {
            // Pass the user's name up to the main App component
            onLogin({ name, email });
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', alignItems: 'center', justifyContent: 'center', backgroundColor: '#2d6a4f' }}>
            <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <div style={{ backgroundColor: '#e0f2fe', padding: '1rem', borderRadius: '50%' }}>
                        <Leaf color="#0284c7" size={32} />
                    </div>
                </div>
                <h2 style={{ color: '#1f2937', marginBottom: '0.5rem', fontSize: '1.8rem' }}>AgriSmart</h2>
                <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Sign in to manage your farms</p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* New Name Input */}
                    <div style={{ position: 'relative' }}>
                        <User size={20} style={{ position: 'absolute', left: '12px', top: '14px', color: '#9ca3af' }} />
                        <input type="text" placeholder="Full Name (e.g. Naras)" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem' }} />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <Mail size={20} style={{ position: 'absolute', left: '12px', top: '14px', color: '#9ca3af' }} />
                        <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem' }} />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <Lock size={20} style={{ position: 'absolute', left: '12px', top: '14px', color: '#9ca3af' }} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem' }} />
                    </div>

                    <button type="submit" style={{ backgroundColor: '#2d6a4f', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginTop: '0.5rem' }}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}