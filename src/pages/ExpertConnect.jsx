import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function ExpertConnect() {
    return (
        <div>
            <h1>Expert Community</h1>
            <div className="glass-panel" style={{ padding: '1.5rem', marginTop: '2rem' }}>
                <h4>Farmer John asks:</h4>
                <p>"My tomato leaves are turning yellow. What should I do?"</p>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <ShieldCheck className="text-emerald" size={18} />
                        <strong>Dr. Smith (Agronomist)</strong>
                    </div>
                    <p>This indicates nitrogen deficiency. Apply NPK fertilizer.</p>
                </div>
            </div>
        </div>
    );
}