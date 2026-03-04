import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Sprout, Lock, Mail, User, ArrowRight, Loader2 } from 'lucide-react';

export default function Login({ onLogin }) {
    const [loading, setLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and Sign Up
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (isSignUp) {
                // 1. Sign Up New User
                const { data, error: signUpError } = await supabase.auth.signUp({
                    email,
                    password,
                });
                if (signUpError) throw signUpError;

                // 2. Insert Profile Data
                if (data.user) {
                    const { error: profileError } = await supabase
                        .from('profiles')
                        .insert([{ id: data.user.id, full_name: name, email }]);
                    if (profileError) throw profileError;

                    // AUTO-LOGIN after Sign Up
                    onLogin({
                        name: name,
                        email: email,
                        id: data.user.id
                    });
                }
            } else {
                // EXISTING LOGIN LOGIC
                const { data, error: signInError } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (signInError) throw signInError;

                const { data: profile } = await supabase
                    .from('profiles')
                    .select('full_name')
                    .eq('id', data.user.id)
                    .single();

                onLogin({
                    name: profile ? profile.full_name : 'Farmer',
                    email: data.user.email,
                    id: data.user.id
                });
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = { width: '100%', padding: '16px 16px 16px 50px', borderRadius: '12px', border: 'none', outline: 'none', fontSize: '1rem', backgroundColor: '#f3f4f6', transition: 'all 0.3s ease' };
    const iconStyle = { position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' };

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', alignItems: 'center', justifyContent: 'center', backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.7)), url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)', padding: '3.5rem', borderRadius: '24px', width: '90%', maxWidth: '460px', textAlign: 'center' }}>

                <div style={{ display: 'inline-flex', padding: '1.25rem', borderRadius: '20px', marginBottom: '1.5rem', backgroundColor: '#ebf5f0', color: '#2d6a4f' }}><Sprout size={48} /></div>
                <h1 style={{ color: '#1f2937', marginBottom: '0.5rem', fontSize: '2rem', fontWeight: '800' }}>AgriSmart</h1>
                <p style={{ color: '#6b7280', marginBottom: '2rem' }}>{isSignUp ? "Create your farm account" : "Welcome back, Manager"}</p>

                {error && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</div>}

                <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {isSignUp && (
                        <div style={{ position: 'relative' }}>
                            <User size={22} style={iconStyle} />
                            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required style={inputStyle} />
                        </div>
                    )}
                    <div style={{ position: 'relative' }}>
                        <Mail size={22} style={iconStyle} />
                        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Lock size={22} style={iconStyle} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />
                    </div>

                    <button type="submit" disabled={loading} style={{ backgroundColor: '#2d6a4f', color: 'white', padding: '16px', borderRadius: '12px', border: 'none', fontSize: '1.1rem', fontWeight: '700', cursor: 'pointer', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        {loading ? <Loader2 className="animate-spin" /> : (isSignUp ? "Create Account" : "Access Dashboard")}
                    </button>
                </form>

                <p style={{ marginTop: '1.5rem', color: '#6b7280', cursor: 'pointer' }} onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? "Already have an account? Sign In" : "New here? Create an account"}
                </p>
            </div>
        </div>
    );
}