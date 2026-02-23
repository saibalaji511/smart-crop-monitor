import React, { useState } from 'react';
import { Sprout, Lock, Mail, User, ArrowRight } from 'lucide-react';

export default function Login({ onLogin }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && password) {
            onLogin({ name, email });
        }
    };

    // --- Premium Styles ---
    const inputStyle = {
        width: '100%',
        padding: '16px 16px 16px 50px',
        borderRadius: '12px',
        border: '2px solid transparent',
        outline: 'none',
        fontSize: '1rem',
        backgroundColor: '#f3f4f6',
        boxSizing: 'border-box',
        transition: 'all 0.3s ease',
        color: '#1f2937'
    };

    const iconStyle = {
        position: 'absolute',
        left: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#9ca3af',
        transition: 'color 0.3s ease'
    };

    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            width: '100vw',
            alignItems: 'center',
            justifyContent: 'center',
            // Stunning farm background with a dark overlay to make the white card pop
            backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.7)), url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            fontFamily: "'Inter', sans-serif"
        }}>

            {/* Frosted Glass Card */}
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                padding: '3.5rem',
                borderRadius: '24px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                width: '90%',
                maxWidth: '460px',
                textAlign: 'center',
                animation: 'fadeIn 0.6s ease-out'
            }}>

                {/* Logo Icon */}
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ebf5f0', padding: '1.25rem', borderRadius: '20px', marginBottom: '1.5rem', color: '#2d6a4f', boxShadow: '0 10px 15px -3px rgba(45, 106, 79, 0.1)' }}>
                    <Sprout size={48} strokeWidth={1.5} />
                </div>

                <h1 style={{ color: '#1f2937', margin: '0 0 0.5rem 0', fontSize: '2.25rem', fontWeight: '800', letterSpacing: '-1px' }}>AgriSmart</h1>
                <p style={{ color: '#6b7280', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Intelligent Farm Management</p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                    {/* Full Name Input */}
                    <div className="input-group" style={{ position: 'relative' }}>
                        <User size={22} style={iconStyle} />
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.border = '2px solid #2d6a4f'; e.target.style.backgroundColor = 'white'; e.target.previousSibling.style.color = '#2d6a4f'; }}
                            onBlur={(e) => { e.target.style.border = '2px solid transparent'; e.target.style.backgroundColor = '#f3f4f6'; e.target.previousSibling.style.color = '#9ca3af'; }}
                        />
                    </div>

                    {/* Email Input */}
                    <div className="input-group" style={{ position: 'relative' }}>
                        <Mail size={22} style={iconStyle} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.border = '2px solid #2d6a4f'; e.target.style.backgroundColor = 'white'; e.target.previousSibling.style.color = '#2d6a4f'; }}
                            onBlur={(e) => { e.target.style.border = '2px solid transparent'; e.target.style.backgroundColor = '#f3f4f6'; e.target.previousSibling.style.color = '#9ca3af'; }}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="input-group" style={{ position: 'relative' }}>
                        <Lock size={22} style={iconStyle} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.border = '2px solid #2d6a4f'; e.target.style.backgroundColor = 'white'; e.target.previousSibling.style.color = '#2d6a4f'; }}
                            onBlur={(e) => { e.target.style.border = '2px solid transparent'; e.target.style.backgroundColor = '#f3f4f6'; e.target.previousSibling.style.color = '#9ca3af'; }}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#2d6a4f',
                            color: 'white',
                            padding: '16px',
                            borderRadius: '12px',
                            border: 'none',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            marginTop: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 4px 6px -1px rgba(45, 106, 79, 0.4)',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => { e.target.style.backgroundColor = '#1b4332'; e.target.style.transform = 'translateY(-2px)'; }}
                        onMouseOut={(e) => { e.target.style.backgroundColor = '#2d6a4f'; e.target.style.transform = 'translateY(0)'; }}
                    >
                        Access Dashboard <ArrowRight size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
}