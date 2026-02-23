import React, { useState } from 'react';
import { Leaf, Maximize, Database, Edit3, CheckCircle, ChevronDown } from 'lucide-react';

export default function Dashboard({ userName }) {
    const [isEditing, setIsEditing] = useState(false);

    // A master state object to hold every editable item on the page
    const [farmData, setFarmData] = useState({
        cropName: 'Tomato',
        year: '2024',
        area: '12',
        lastProduction: '4500',
        airTemp: '32',
        waterContent: '65',
        soilMoisture: 'Adequate',
        healthScore: '85',
        diseaseRisk: 'Low',
        pestActivity: 'None'
    });

    const handleChange = (e) => {
        setFarmData({
            ...farmData,
            [e.target.name]: e.target.value
        });
    };

    const colors = {
        bg: '#f8f6f0', card: '#ffffff', primary: '#2d6a4f', lightGreen: '#95d5b2',
        textMain: '#1f2937', textMuted: '#9ca3af', border: '#f3f4f6'
    };

    const cardStyle = { backgroundColor: colors.card, borderRadius: '16px', padding: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: `1px solid ${colors.border}` };
    const iconWrapper = { width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#ebf5f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.primary };

    // Styling for our input boxes when editing
    const inputStyle = { width: '80%', padding: '4px 8px', borderRadius: '6px', border: `2px solid ${colors.primary}`, fontSize: 'inherit', fontWeight: 'inherit', color: colors.primary, outline: 'none', backgroundColor: '#ebf5f0' };

    return (
        <div style={{ backgroundColor: colors.bg, minHeight: '100vh', padding: '2rem', borderRadius: '32px 0 0 0' }}>

            {/* HEADER */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: colors.textMain, margin: 0 }}>
                        Greenvalley {farmData.cropName} (Sector A)
                    </h1>
                    <div style={{ height: '24px', width: '2px', backgroundColor: '#d1d5db' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: colors.textMain }}>
                        {isEditing ? <input name="year" value={farmData.year} onChange={handleChange} style={inputStyle} /> : <>{farmData.year} <ChevronDown size={16} /></>}
                    </div>
                    <div style={{ height: '24px', width: '2px', backgroundColor: '#d1d5db' }}></div>
                    {/* Dynamic Farm Manager Name */}
                    <span style={{ color: colors.textMuted, fontSize: '0.9rem', fontWeight: '500' }}>Manager: {userName}</span>
                </div>

                {/* Toggle Edit Mode Button */}
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    style={{ backgroundColor: isEditing ? '#eab308' : colors.primary, color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: '0.2s' }}
                >
                    {isEditing ? <><CheckCircle size={18} /> Save Changes</> : <><Edit3 size={18} /> Edit Metrics</>}
                </button>
            </div>

            {/* TOP ROW: CROP SUMMARY */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={iconWrapper}><Leaf size={20} /></div>
                    <div style={{ flex: 1 }}>
                        <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500' }}>Crop name</span>
                        <div style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.textMain }}>
                            {isEditing ? <input name="cropName" value={farmData.cropName} onChange={handleChange} style={inputStyle} /> : farmData.cropName}
                        </div>
                    </div>
                </div>

                <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={iconWrapper}><Maximize size={20} /></div>
                    <div style={{ flex: 1 }}>
                        <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500' }}>Area (Acres)</span>
                        <div style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.textMain }}>
                            {isEditing ? <input name="area" type="number" value={farmData.area} onChange={handleChange} style={inputStyle} /> : `${farmData.area} Acre`}
                        </div>
                    </div>
                </div>

                <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={iconWrapper}><Database size={20} /></div>
                    <div style={{ flex: 1 }}>
                        <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500' }}>Last production (kg)</span>
                        <div style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.textMain }}>
                            {isEditing ? <input name="lastProduction" type="number" value={farmData.lastProduction} onChange={handleChange} style={inputStyle} /> : `${farmData.lastProduction} kg`}
                        </div>
                    </div>
                </div>
            </div>

            {/* MIDDLE ROW: STATS & HEALTH */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ ...cardStyle, padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ flex: 1 }}>
                            <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500', display: 'block', marginBottom: '0.25rem' }}>Air temperature</span>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.textMain }}>
                                {isEditing ? <input name="airTemp" value={farmData.airTemp} onChange={handleChange} style={{ ...inputStyle, width: '60%' }} /> : `${farmData.airTemp}°C`}
                            </div>
                        </div>
                    </div>

                    <div style={{ ...cardStyle, padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ flex: 1 }}>
                            <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500', display: 'block', marginBottom: '0.25rem' }}>Water content</span>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.textMain }}>
                                {isEditing ? <input name="waterContent" value={farmData.waterContent} onChange={handleChange} style={{ ...inputStyle, width: '60%' }} /> : `${farmData.waterContent}%`}
                            </div>
                        </div>
                    </div>

                    <div style={{ ...cardStyle, padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ flex: 1 }}>
                            <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500', display: 'block', marginBottom: '0.25rem' }}>Soil Moisture</span>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.textMain }}>
                                {isEditing ? <input name="soilMoisture" value={farmData.soilMoisture} onChange={handleChange} style={{ ...inputStyle, width: '80%' }} /> : farmData.soilMoisture}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ ...cardStyle, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: colors.textMain, margin: '0 0 2rem 0' }}>Health Statistics</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flex: 1 }}>

                        <div style={{ position: 'relative', width: '160px', height: '160px' }}>
                            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                                <circle cx="50" cy="50" r="40" fill="none" stroke={colors.primary} strokeWidth="8" strokeDasharray={`${(farmData.healthScore / 100) * 251.2} 251.2`} strokeLinecap="round" style={{ transition: 'stroke-dasharray 0.5s ease' }} />
                            </svg>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500' }}>Score</span>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: colors.textMain, marginTop: '4px' }}>
                                    {isEditing ? <input name="healthScore" type="number" value={farmData.healthScore} onChange={handleChange} style={{ ...inputStyle, width: '60%', textAlign: 'center' }} /> : `${farmData.healthScore}%`}
                                </span>
                            </div>
                        </div>

                        <div style={{ width: '1px', height: '100px', backgroundColor: colors.border }}></div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1, paddingLeft: '2rem' }}>
                            <div>
                                <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500' }}>Disease Risk</span>
                                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.textMain }}>
                                    {isEditing ? <input name="diseaseRisk" value={farmData.diseaseRisk} onChange={handleChange} style={inputStyle} /> : farmData.diseaseRisk}
                                </div>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500' }}>Pest Activity</span>
                                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.textMain }}>
                                    {isEditing ? <input name="pestActivity" value={farmData.pestActivity} onChange={handleChange} style={inputStyle} /> : farmData.pestActivity}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}