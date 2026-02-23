import React, { useState } from 'react';
import { Leaf, Maximize, Database, ThermometerSun, Droplets, Activity, ChevronDown } from 'lucide-react';

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cropDetails, setCropDetails] = useState({
        name: 'Tomato',
        area: '12',
        production: '4500'
    });

    const handleAddCrop = (e) => {
        e.preventDefault();
        setCropDetails({
            name: e.target.cropName.value,
            area: e.target.cropArea.value,
            production: e.target.cropProduction.value
        });
        setIsModalOpen(false);
    };

    // --- THEME COLORS ---
    const colors = {
        bg: '#f8f6f0',       // Soft cream background
        card: '#ffffff',     // Pure white cards
        primary: '#2d6a4f',  // Deep forest green
        lightGreen: '#95d5b2',// Soft accent green
        textMain: '#1f2937', // Dark gray text
        textMuted: '#9ca3af', // Light gray text
        border: '#f3f4f6'    // Very subtle border
    };

    // --- REUSABLE STYLES ---
    const cardStyle = {
        backgroundColor: colors.card,
        borderRadius: '16px',
        padding: '1.5rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
        border: `1px solid ${colors.border}`,
    };

    const iconWrapper = {
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        backgroundColor: '#ebf5f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.primary
    };

    return (
        <div style={{ backgroundColor: colors.bg, minHeight: '100vh', padding: '2rem', borderRadius: '32px 0 0 0' }}>

            {/* --- HEADER --- */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: colors.textMain, margin: 0 }}>
                        Greenvalley {cropDetails.name} (Sector A)
                    </h1>
                    <div style={{ height: '24px', width: '2px', backgroundColor: '#d1d5db' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: '600', color: colors.textMain }}>
                        2024 <ChevronDown size={16} />
                    </div>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    style={{ backgroundColor: colors.primary, color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    + Add crop
                </button>
            </div>

            {/* --- TOP ROW: CROP SUMMARY --- */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>

                <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={iconWrapper}><Leaf size={20} /></div>
                    <div>
                        <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500' }}>Crop name</span>
                        <div style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.textMain }}>{cropDetails.name}</div>
                    </div>
                </div>

                <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={iconWrapper}><Maximize size={20} /></div>
                    <div>
                        <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500' }}>Area</span>
                        <div style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.textMain }}>{cropDetails.area} Acre</div>
                    </div>
                </div>

                <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={iconWrapper}><Database size={20} /></div>
                        <div>
                            <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500' }}>Last production</span>
                            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: colors.textMain }}>{cropDetails.production} kg</div>
                        </div>
                    </div>
                    <div style={{ padding: '4px', border: `1px solid ${colors.border}`, borderRadius: '6px', cursor: 'pointer' }}><ChevronDown size={16} color={colors.textMuted} /></div>
                </div>
            </div>

            {/* --- MIDDLE ROW: STATS & HEALTH --- */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', marginBottom: '1.5rem' }}>

                {/* Left Column: Environmental Metrics */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ ...cardStyle, padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500', display: 'block', marginBottom: '0.25rem' }}>Air temperature</span>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.textMain }}>32°C</span>
                            </div>
                        </div>
                        <span style={{ color: '#ef4444', border: '1px solid #fca5a5', padding: '2px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '600' }}>High</span>
                    </div>

                    <div style={{ ...cardStyle, padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500', display: 'block', marginBottom: '0.25rem' }}>Water content</span>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.textMain }}>65%</span>
                            </div>
                        </div>
                        <span style={{ color: colors.primary, border: `1px solid ${colors.lightGreen}`, padding: '2px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '600' }}>Good</span>
                    </div>

                    <div style={{ ...cardStyle, padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500', display: 'block', marginBottom: '0.25rem' }}>Soil Moisture</span>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.textMain }}>Adequate</span>
                            </div>
                        </div>
                        <span style={{ color: '#eab308', border: '1px solid #fde047', padding: '2px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '600' }}>Optimal</span>
                    </div>
                </div>

                {/* Right Column: Health/Financial Stats */}
                <div style={{ ...cardStyle, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: colors.textMain, margin: '0 0 0.25rem 0' }}>Health Statistics</h3>
                            <span style={{ fontSize: '0.85rem', color: colors.textMuted }}>compare with last time</span>
                        </div>
                        <div style={{ padding: '6px 12px', border: `1px solid ${colors.border}`, borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            All data <ChevronDown size={14} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flex: 1 }}>

                        {/* SVG Circular Progress Bar */}
                        <div style={{ position: 'relative', width: '160px', height: '160px' }}>
                            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                                {/* Background Track */}
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                                {/* Progress Track */}
                                <circle cx="50" cy="50" r="40" fill="none" stroke={colors.primary} strokeWidth="8" strokeDasharray="210 251.2" strokeLinecap="round" />
                            </svg>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500', marginBottom: '0.25rem' }}>Health Score</span>
                                <span style={{ fontSize: '2rem', fontWeight: '800', color: colors.textMain, lineHeight: '1' }}>85%</span>
                            </div>
                        </div>

                        <div style={{ width: '1px', height: '100px', backgroundColor: colors.border }}></div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500' }}>Disease Risk</span>
                                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.textMain }}>Low</div>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.85rem', color: colors.textMuted, fontWeight: '500' }}>Pest Activity</span>
                                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.textMain }}>None</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- BOTTOM ROW: PRODUCTION CHART --- */}
            <div style={{ ...cardStyle }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: colors.textMain, margin: '0 0 1.5rem 0' }}>Production details</h3>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '180px', padding: '0 1rem' }}>
                    {/* Bar 1 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: colors.textMain, marginBottom: '0.5rem' }}>3200 kg</span>
                        <div style={{ width: '60px', height: '140px', backgroundColor: colors.primary, borderRadius: '6px 6px 0 0' }}></div>
                        <span style={{ fontSize: '0.85rem', color: colors.textMuted, marginTop: '0.75rem', fontWeight: '500' }}>January</span>
                    </div>
                    {/* Bar 2 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: colors.textMain, marginBottom: '0.5rem' }}>2800 kg</span>
                        <div style={{ width: '60px', height: '110px', backgroundColor: colors.lightGreen, borderRadius: '6px 6px 0 0' }}></div>
                        <span style={{ fontSize: '0.85rem', color: colors.textMuted, marginTop: '0.75rem', fontWeight: '500' }}>February</span>
                    </div>
                    {/* Bar 3 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: colors.textMain, marginBottom: '0.5rem' }}>1600 kg</span>
                        <div style={{ width: '60px', height: '70px', backgroundColor: colors.primary, borderRadius: '6px 6px 0 0' }}></div>
                        <span style={{ fontSize: '0.85rem', color: colors.textMuted, marginTop: '0.75rem', fontWeight: '500' }}>March</span>
                    </div>
                    {/* Bar 4 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: colors.textMain, marginBottom: '0.5rem' }}>2900 kg</span>
                        <div style={{ width: '60px', height: '130px', backgroundColor: colors.primary, borderRadius: '6px 6px 0 0' }}></div>
                        <span style={{ fontSize: '0.85rem', color: colors.textMuted, marginTop: '0.75rem', fontWeight: '500' }}>April</span>
                    </div>
                    {/* Bar 5 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: colors.textMain, marginBottom: '0.5rem' }}>1600 kg</span>
                        <div style={{ width: '60px', height: '80px', backgroundColor: colors.primary, borderRadius: '6px 6px 0 0' }}></div>
                        <span style={{ fontSize: '0.85rem', color: colors.textMuted, marginTop: '0.75rem', fontWeight: '500' }}>May</span>
                    </div>
                    {/* Bar 6 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: colors.textMain, marginBottom: '0.5rem' }}>1700 kg</span>
                        <div style={{ width: '60px', height: '85px', backgroundColor: colors.lightGreen, borderRadius: '6px 6px 0 0' }}></div>
                        <span style={{ fontSize: '0.85rem', color: colors.textMuted, marginTop: '0.75rem', fontWeight: '500' }}>June</span>
                    </div>
                </div>
            </div>

            {/* --- ADD CROP MODAL --- */}
            {isModalOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '16px', width: '90%', maxWidth: '400px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ margin: '0 0 1.5rem 0', color: colors.textMain }}>Add New Crop</h2>
                        <form onSubmit={handleAddCrop} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="text" name="cropName" placeholder="Crop Name" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: `1px solid ${colors.border}`, outline: 'none' }} />
                            <input type="number" name="cropArea" placeholder="Area (Acres)" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: `1px solid ${colors.border}`, outline: 'none' }} />
                            <input type="number" name="cropProduction" placeholder="Expected Production" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: `1px solid ${colors.border}`, outline: 'none' }} />
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: `1px solid ${colors.border}`, backgroundColor: 'white', cursor: 'pointer', fontWeight: '600' }}>Cancel</button>
                                <button type="submit" style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: 'none', backgroundColor: colors.primary, color: 'white', cursor: 'pointer', fontWeight: '600' }}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}