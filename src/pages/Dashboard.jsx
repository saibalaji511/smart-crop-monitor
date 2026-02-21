import React, { useState } from 'react';
import { ThermometerSun, Droplets, Activity, BarChart2, X, Sprout, Wind, Sun } from 'lucide-react';

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

    const labelStyle = { color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.25rem', display: 'block', fontWeight: '500' };
    const valueStyle = { fontSize: '1.75rem', fontWeight: '700', color: '#111827', letterSpacing: '-0.5px' };

    return (
        <div style={{ padding: '1.5rem', maxWidth: '1400px', margin: '0 auto' }}>

            {/* Embedded CSS for smooth hover animations and organic shapes */}
            <style>{`
        .hover-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 1.75rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          border: 1px solid #f3f4f6;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(16, 185, 129, 0.15), 0 10px 10px -5px rgba(16, 185, 129, 0.05);
          border-color: #a7f3d0;
        }
        .organic-icon-bg {
          padding: 12px;
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; /* Organic leaf shape */
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .glass-btn {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .glass-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.02);
        }
        .progress-bar {
          background: #e5e7eb;
          border-radius: 999px;
          height: 8px;
          width: 100%;
          overflow: hidden;
          margin-top: 0.5rem;
        }
      `}</style>

            {/* Hero Banner Section */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(4, 120, 87, 0.9) 0%, rgba(16, 185, 129, 0.8) 100%), url("https://images.unsplash.com/photo-1592982537447-6f296da1e0fc?q=80&w=2000&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '24px',
                padding: '2.5rem',
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 15px 30px -5px rgba(16, 185, 129, 0.3)',
                color: 'white'
            }}>
                <div>
                    <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.875rem', fontWeight: '500', backdropFilter: 'blur(4px)', marginBottom: '1rem', display: 'inline-block' }}>
                        Sector A Active
                    </span>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 0.5rem 0', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        Greenvalley {cropDetails.name}
                    </h1>
                    <p style={{ color: '#d1fae5', margin: 0, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Farm Manager: Saroj Nadar • 2024 Season
                    </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="glass-btn">
                    <Sprout size={20} /> Add New Crop
                </button>
            </div>

            {/* Top Summary Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="hover-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <span style={labelStyle}>Crop Variety</span>
                            <span style={valueStyle}>{cropDetails.name}</span>
                        </div>
                        <div className="organic-icon-bg"><Sprout size={24} color="#047857" /></div>
                    </div>
                </div>

                <div className="hover-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <span style={labelStyle}>Total Area</span>
                            <span style={valueStyle}>{cropDetails.area} <span style={{ fontSize: '1rem', color: '#6b7280', fontWeight: '500' }}>Acres</span></span>
                        </div>
                        <div className="organic-icon-bg" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)' }}><BarChart2 size={24} color="#0369a1" /></div>
                    </div>
                    <div className="progress-bar"><div style={{ height: '100%', width: '75%', background: '#38bdf8', borderRadius: '999px' }}></div></div>
                </div>

                <div className="hover-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <span style={labelStyle}>Expected Yield</span>
                            <span style={valueStyle}>{cropDetails.production} <span style={{ fontSize: '1rem', color: '#6b7280', fontWeight: '500' }}>kg</span></span>
                        </div>
                        <div className="organic-icon-bg" style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' }}><Activity size={24} color="#b45309" /></div>
                    </div>
                    <div className="progress-bar"><div style={{ height: '100%', width: '85%', background: '#fbbf24', borderRadius: '999px' }}></div></div>
                </div>
            </div>

            {/* Parameters & Health Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>

                {/* Environment Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="hover-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '12px', background: '#fffbeb', borderRadius: '16px', color: '#f59e0b' }}><Sun size={28} /></div>
                            <div>
                                <span style={labelStyle}>Air Temperature</span>
                                <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827' }}>32°C</span>
                            </div>
                        </div>
                        <span style={{ background: '#fef3c7', color: '#b45309', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>Warning: High</span>
                    </div>

                    <div className="hover-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '12px', background: '#f0fdfa', borderRadius: '16px', color: '#0d9488' }}><Droplets size={28} /></div>
                            <div>
                                <span style={labelStyle}>Soil Moisture</span>
                                <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827' }}>65%</span>
                            </div>
                        </div>
                        <span style={{ background: '#d1fae5', color: '#047857', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>Optimal</span>
                    </div>
                </div>

                {/* Health Statistics Card */}
                <div className="hover-card" style={{ background: 'linear-gradient(to bottom right, #ffffff, #f0fdf4)' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1f2937' }}>Crop Health Status</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>

                        {/* Custom SVG Circular Progress */}
                        <div style={{ position: 'relative', width: '140px', height: '140px' }}>
                            <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="85, 100" />
                            </svg>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '2rem', fontWeight: '800', color: '#10b981', lineHeight: '1' }}>85<span style={{ fontSize: '1rem' }}>%</span></span>
                                <span style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Score</span>
                            </div>
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{ marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px dashed #d1d5db' }}>
                                <span style={labelStyle}>Disease Risk Assessment</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                                    <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#047857' }}>Low Risk</span>
                                </div>
                            </div>
                            <div>
                                <span style={labelStyle}>Pest Activity</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                                    <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#047857' }}>None Detected</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- ADD CROP MODAL --- */}
            {isModalOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', zIndex: 1000,
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <div style={{
                        backgroundColor: 'white', padding: '2.5rem', borderRadius: '24px',
                        width: '90%', maxWidth: '450px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        animation: 'fadeIn 0.2s ease-out'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div className="organic-icon-bg" style={{ padding: '8px' }}><Sprout size={20} color="#047857" /></div>
                                <h2 style={{ fontSize: '1.5rem', color: '#111827', margin: 0, fontWeight: '700' }}>Add New Crop</h2>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} style={{ background: '#f3f4f6', border: 'none', cursor: 'pointer', color: '#6b7280', padding: '8px', borderRadius: '50%' }}>
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleAddCrop} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontSize: '0.9rem', fontWeight: '600' }}>Crop Name</label>
                                <input type="text" name="cropName" placeholder="e.g. Cardamom, Wheat" required style={{ width: '100%', padding: '0.875rem', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontSize: '0.9rem', fontWeight: '600' }}>Cultivation Area (Acres)</label>
                                <input type="number" name="cropArea" placeholder="e.g. 53" required style={{ width: '100%', padding: '0.875rem', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontSize: '0.9rem', fontWeight: '600' }}>Expected Production (kg)</label>
                                <input type="number" name="cropProduction" placeholder="e.g. 1200" required style={{ width: '100%', padding: '0.875rem', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem' }} />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                                <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: 1, padding: '0.875rem', borderRadius: '12px', border: '1px solid #d1d5db', backgroundColor: 'white', cursor: 'pointer', fontWeight: '600', fontSize: '1rem' }}>
                                    Cancel
                                </button>
                                <button type="submit" style={{ flex: 1, padding: '0.875rem', borderRadius: '12px', border: 'none', backgroundColor: '#10b981', color: 'white', cursor: 'pointer', fontWeight: '600', fontSize: '1rem', boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)' }}>
                                    Save Crop Data
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}