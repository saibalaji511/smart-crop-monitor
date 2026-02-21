import React, { useState } from 'react';

export default function TreatmentLogs() {
    const [logs, setLogs] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newLog = {
            date: e.target.date.value,
            crop: e.target.crop.value,
            action: e.target.action.value,
        };
        setLogs([newLog, ...logs]);
        e.target.reset();
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
            <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '1.5rem' }}>
                <h3>Log Treatment</h3>
                <input type="date" name="date" className="glass-input" required />
                <input type="text" name="crop" placeholder="Crop Name" className="glass-input" required />
                <input type="text" name="action" placeholder="Action Taken" className="glass-input" required />
                <button type="submit" className="glass-button" style={{ width: '100%' }}>Save</button>
            </form>
            <div>
                <h3>History</h3>
                {logs.map((log, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '1rem', marginBottom: '1rem' }}>
                        <strong>{log.crop}</strong> - {log.action} <span style={{ float: 'right', color: 'var(--text-muted)' }}>{log.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}