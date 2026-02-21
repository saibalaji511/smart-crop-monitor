import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle, AlertCircle } from 'lucide-react';

export default function Diagnosis() {
    const [imagePreview, setImagePreview] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    // This reference allows us to trigger the hidden file input when clicking our custom UI
    const fileInputRef = useRef(null);

    // Handle file selection from the device
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create a temporary local URL to preview the uploaded image
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
            setResult(null); // Clear any previous results
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handleAnalyze = () => {
        if (!imagePreview) return;

        setAnalyzing(true);
        setResult(null);

        // Mock AI ML processing time
        setTimeout(() => {
            setAnalyzing(false);
            setResult({
                disease: "Early Blight (Alternaria solani)",
                confidence: "94.2%",
                cause: "Fungal infection that typically thrives in warm, humid weather with frequent rainfall or heavy dew.",
                recommendation: "Apply a copper-based fungicide. Ensure proper spacing between plants and avoid overhead watering to keep foliage dry."
            });
        }, 2500);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h1>AI Crop Diagnosis</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Upload a picture of a diseased leaf from your device to get an instant diagnosis and treatment plan.
            </p>

            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>

                {/* Hidden File Input */}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                />

                {/* Display Image Preview OR the Upload Prompt */}
                {imagePreview ? (
                    <div style={{ animation: 'fadeIn 0.5s ease' }}>
                        <img
                            src={imagePreview}
                            alt="Uploaded crop leaf"
                            style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}
                        />
                        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <button
                                className="glass-button"
                                onClick={triggerFileInput}
                                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid var(--color-emerald)', color: 'var(--color-emerald)' }}
                            >
                                Change Photo
                            </button>
                            <button className="glass-button" onClick={handleAnalyze} disabled={analyzing}>
                                {analyzing ? 'Analyzing Image...' : 'Analyze Image'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div onClick={triggerFileInput} style={{ cursor: 'pointer', padding: '2rem 0' }}>
                        <UploadCloud size={48} className="text-emerald" style={{ margin: '0 auto 1rem' }} />
                        <h3>Click to Browse Files</h3>
                        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Supports JPG, PNG</p>
                    </div>
                )}
            </div>

            {/* Results Section */}
            {result && (
                <div className="glass-panel" style={{ padding: '1.5rem', marginTop: '2rem', borderLeft: '4px solid var(--color-emerald)' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-emerald)' }}>
                        <CheckCircle /> Analysis Complete
                    </h3>

                    <div style={{ marginTop: '1.5rem' }}>
                        <p style={{ fontSize: '1.1rem' }}><strong>Detected Issue:</strong> {result.disease}</p>
                        <p style={{ color: 'var(--text-muted)' }}>Confidence Score: {result.confidence}</p>

                        {/* New Cause Section */}
                        <div style={{ marginTop: '1.5rem', background: 'rgba(245, 158, 11, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--color-amber)' }}>
                            <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-amber)', marginBottom: '0.5rem' }}>
                                <AlertCircle size={18} /> Likely Cause
                            </strong>
                            <p style={{ lineHeight: '1.5' }}>{result.cause}</p>
                        </div>

                        {/* Treatment Section */}
                        <div style={{ marginTop: '1rem', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
                            <strong style={{ color: 'var(--color-emerald)' }}>Treatment Recommendation:</strong>
                            <p style={{ marginTop: '0.5rem', lineHeight: '1.5' }}>{result.recommendation}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}