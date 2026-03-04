import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // Import the client
import { Leaf, Maximize, Database, Edit3, CheckCircle, ChevronDown, Loader2 } from 'lucide-react';

export default function Dashboard({ userName, userId }) { // Receive userId
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);

    const [farmData, setFarmData] = useState({
        cropName: 'Tomato', year: '2024', area: '12', lastProduction: '4500',
        airTemp: '32', waterContent: '65', soilMoisture: 'Adequate',
        healthScore: '85', diseaseRisk: 'Low', pestActivity: 'None'
    });

    // 1. Fetch Data on Load
    useEffect(() => {
        const fetchData = async () => {
            // Try to find a crop entry for this user
            const { data, error } = await supabase
                .from('crops')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false }) // Get the latest one
                .limit(1)
                .single();

            if (data) {
                // Map database columns to our state
                setFarmData({
                    cropName: data.crop_name, year: data.year, area: data.area, lastProduction: data.last_production,
                    airTemp: data.air_temp, waterContent: data.water_content, soilMoisture: data.soil_moisture,
                    healthScore: data.health_score, diseaseRisk: data.disease_risk, pestActivity: data.pest_activity
                });
            }
            setLoading(false);
        };

        if (userId) fetchData();
    }, [userId]);

    // 2. Save Data to Database
    const handleSave = async () => {
        setIsEditing(false);

        const dbData = {
            user_id: userId,
            crop_name: farmData.cropName, year: farmData.year, area: farmData.area, last_production: farmData.lastProduction,
            air_temp: farmData.airTemp, water_content: farmData.waterContent, soil_moisture: farmData.soilMoisture,
            health_score: farmData.healthScore, disease_risk: farmData.diseaseRisk, pest_activity: farmData.pestActivity
        };

        // Upsert (Insert if new, Update if exists) would be ideal, 
        // but for simplicity, we will just insert a new record to keep history
        const { error } = await supabase.from('crops').insert([dbData]);

        if (error) {
            alert("Error saving data: " + error.message);
        } else {
            console.log("Data saved to Supabase!");
        }
    };

    const handleChange = (e) => {
        setFarmData({ ...farmData, [e.target.name]: e.target.value });
    };

    // --- Theme & Styles (Same as before) ---
    const colors = { bg: '#f8f6f0', card: '#ffffff', primary: '#2d6a4f', textMain: '#1f2937', textMuted: '#9ca3af', border: '#f3f4f6' };
    const cardStyle = { backgroundColor: colors.card, borderRadius: '16px', padding: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: `1px solid ${colors.border}` };
    const iconWrapper = { width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#ebf5f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.primary };
    const inputStyle = { width: '80%', padding: '4px 8px', borderRadius: '6px', border: `2px solid ${colors.primary}`, fontSize: 'inherit', fontWeight: 'inherit', color: colors.primary, outline: 'none', backgroundColor: '#ebf5f0' };

    if (loading) return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}><Loader2 className="animate-spin" /></div>;

    return (
        <div style={{ backgroundColor: colors.bg, minHeight: '100vh', padding: '2rem', borderRadius: '32px 0 0 0' }}>

            {/* HEADER */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: colors.textMain, margin: 0 }}>Greenvalley {farmData.cropName}</h1>
                    <div style={{ height: '24px', width: '2px', backgroundColor: '#d1d5db' }}></div>
                    <span style={{ color: colors.textMuted, fontSize: '0.9rem', fontWeight: '500' }}>Manager: {userName}</span>
                </div>

                <button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    style={{ backgroundColor: isEditing ? '#eab308' : colors.primary, color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: '0.2s' }}
                >
                    {isEditing ? <><CheckCircle size={18} /> Save to Cloud</> : <><Edit3 size={18} /> Edit Metrics</>}
                </button>
            </div>

            {/* DASHBOARD CARDS (Keep the rest of your UI code exactly the same as before, just using farmData state) */}
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
                {/* ... Repeat for other cards (Area, Production, etc.) ... */}
                {/* Note: I'm skipping repeating the visual layout code here to save space, but you should keep your existing layout code and just ensure it uses farmData.area, farmData.lastProduction etc. */}
                {/* If you need the full layout code again, let me know! */}
            </div>

            {/* You can copy the rest of the 'return' statement from your previous Dashboard.jsx file here. 
          Just make sure to pass the `handleChange` and `farmData` correctly! */}
        </div>
    );
}