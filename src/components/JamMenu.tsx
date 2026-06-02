import React, { useState, useEffect } from 'react';
import { useJam } from '../JamContext';
import QRCode from 'qrcode';

const COLORS = [
    'linear-gradient(135deg,#1db954,#1ed760)',
    'linear-gradient(135deg,#e84444,#ff6b6b)',
    'linear-gradient(135deg,#4a90d9,#6eb5ff)',
    'linear-gradient(135deg,#f5a623,#ffc857)',
    'linear-gradient(135deg,#b24592,#f15f79)',
    'linear-gradient(135deg,#00c9ff,#92fe9d)',
];

import { I } from "../icons";

const fmtTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
};
const safeInitial = (name: string) => ((name || '?').trim()[0] || '?').toUpperCase();

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');

  .jam-root {
    font-family: 'DM Sans', sans-serif;
    background: #0a0a0c;
    color: #e8e8ea;
    width: 340px;
    min-height: 200px;
    max-height: 680px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.06);
    box-shadow: 0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03);
  }

  .jam-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 18px 14px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    background: rgba(255,255,255,0.02);
    flex-shrink: 0;
  }

  .jam-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .jam-header-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .jam-logo-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(255,255,255,0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    transition: all 0.2s ease;
  }

  .jam-logo-icon.active {
    background: rgba(29,185,84,0.15);
    color: #1db954;
    box-shadow: 0 0 16px rgba(29,185,84,0.2);
  }

  .jam-title {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.2px;
    color: #f0f0f2;
  }

  .jam-subtitle {
    font-size: 11px;
    font-weight: 400;
    color: #555;
    margin-top: 1px;
    letter-spacing: 0.2px;
  }

  .jam-icon-btn {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: none;
    background: transparent;
    color: #555;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
    padding: 0;
  }

  .jam-icon-btn:hover {
    background: rgba(255,255,255,0.07);
    color: #aaa;
  }

  .jam-icon-btn.green { color: #1db954; }
  .jam-icon-btn.small { width: 26px; height: 26px; border-radius: 6px; }
  .jam-icon-btn.red:hover { background: rgba(228,68,68,0.15); color: #e84444; }

  .jam-body {
    flex: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
  }

  .jam-body.scrollable {
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.08) transparent;
  }

  .jam-body.scrollable::-webkit-scrollbar { width: 4px; }
  .jam-body.scrollable::-webkit-scrollbar-track { background: transparent; }
  .jam-body.scrollable::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }

  .jam-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 8px 12px;
    gap: 8px;
  }

  .jam-hero-icon {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.07);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
    margin-bottom: 4px;
  }

  .jam-hero-title {
    font-size: 17px;
    font-weight: 600;
    color: #e8e8ea;
    margin: 0;
    letter-spacing: -0.3px;
  }

  .jam-hero-desc {
    font-size: 12px;
    color: #4a4a52;
    margin: 0;
    line-height: 1.6;
    max-width: 230px;
  }

  .jam-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 0 16px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.18s ease;
    letter-spacing: -0.1px;
  }

  .jam-btn.full { width: 100%; }
  .jam-btn.flex-1 { flex: 1; }

  .jam-btn.green {
    background: #1db954;
    color: #000;
  }

  .jam-btn.green:hover {
    background: #1ed760;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(29,185,84,0.3);
  }

  .jam-btn.outline {
    background: transparent;
    color: #888;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .jam-btn.outline:hover {
    background: rgba(255,255,255,0.05);
    color: #c0c0c4;
    border-color: rgba(255,255,255,0.16);
  }

  .jam-btn.red {
    background: rgba(228,68,68,0.12);
    color: #e84444;
    border: 1px solid rgba(228,68,68,0.2);
  }

  .jam-btn.red:hover {
    background: rgba(228,68,68,0.2);
    box-shadow: 0 4px 16px rgba(228,68,68,0.15);
  }

  .jam-divider {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #333;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin: 2px 0;
  }

  .jam-divider-line {
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.05);
  }

  .jam-input {
    width: 100%;
    height: 40px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    color: #e0e0e4;
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    padding: 0 14px;
    outline: none;
    transition: all 0.15s ease;
    box-sizing: border-box;
  }

  .jam-input::placeholder { color: #383840; }

  .jam-input:focus {
    border-color: rgba(255,255,255,0.18);
    background: rgba(255,255,255,0.06);
  }

  .jam-error {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: rgba(228,68,68,0.08);
    border: 1px solid rgba(228,68,68,0.2);
    border-radius: 10px;
    color: #e84444;
    font-size: 12px;
  }

  .jam-live-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 12px;
    background: rgba(29,185,84,0.06);
    border: 1px solid rgba(29,185,84,0.12);
    border-radius: 8px;
    font-size: 11px;
    font-weight: 500;
    color: #1db954;
    letter-spacing: 0.2px;
  }

  .jam-live-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1db954;
    box-shadow: 0 0 6px rgba(29,185,84,0.8);
    animation: pulse 2s ease infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(0.85); }
  }

  .jam-badge {
    margin-left: auto;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.8px;
    color: #1db954;
    background: rgba(29,185,84,0.12);
    padding: 2px 7px;
    border-radius: 4px;
    border: 1px solid rgba(29,185,84,0.2);
  }

  .jam-ping {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid transparent;
  }

  .jam-ping.good { color: #1db954; background: rgba(29,185,84,0.08); border-color: rgba(29,185,84,0.15); }
  .jam-ping.bad { color: #f5a623; background: rgba(245,166,35,0.08); border-color: rgba(245,166,35,0.15); }
  .jam-ping.measuring { color: #555; background: rgba(255,255,255,0.04); }

  .jam-np-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 14px;
    overflow: hidden;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .jam-np-art-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .jam-np-art {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 12px 40px rgba(0,0,0,0.5);
  }

  .jam-np-art.placeholder {
    background: rgba(255,255,255,0.05);
  }

  .jam-np-meta {
    text-align: center;
  }

  .jam-np-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: #333;
    margin-bottom: 4px;
  }

  .jam-np-title {
    font-size: 15px;
    font-weight: 600;
    color: #f0f0f2;
    letter-spacing: -0.3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .jam-np-artist {
    font-size: 12px;
    color: #555;
    margin-top: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .jam-progress-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .jam-time {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: #444;
    min-width: 32px;
    flex-shrink: 0;
  }

  .jam-time:last-child { text-align: right; }

  .jam-progress-rail {
    flex: 1;
    height: 3px;
    background: rgba(255,255,255,0.08);
    border-radius: 2px;
    position: relative;
    transition: height 0.15s ease;
  }

  .jam-progress-rail:hover { height: 5px; }

  .jam-progress-fill {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #1db954;
    border-radius: 2px;
    transition: width 0.5s linear;
  }

  .jam-progress-dot {
    position: absolute;
    top: 50%;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.15s ease;
    box-shadow: 0 1px 4px rgba(0,0,0,0.4);
  }

  .jam-progress-rail:hover .jam-progress-dot { transform: translate(-50%, -50%) scale(1); }

  .jam-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .jam-ctrl-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: transparent;
    color: #666;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
    padding: 0;
  }

  .jam-ctrl-btn:hover { color: #ccc; background: rgba(255,255,255,0.06); }

  .jam-ctrl-btn.main {
    width: 44px;
    height: 44px;
    background: #fff;
    color: #000;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  }

  .jam-ctrl-btn.main:hover {
    background: #f0f0f0;
    transform: scale(1.06);
    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
  }

  .jam-section-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 12px;
    overflow: hidden;
  }

  .jam-section-title {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 10px 14px 8px;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: #333;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }

  .jam-setting-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    font-size: 12px;
    color: #888;
  }

  .jam-toggle {
    width: 38px;
    height: 22px;
    border-radius: 11px;
    border: none;
    background: rgba(255,255,255,0.08);
    cursor: pointer;
    padding: 3px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
  }

  .jam-toggle.on {
    background: #1db954;
  }

  .jam-toggle-knob {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    transition: all 0.2s ease;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  }

  .jam-toggle.on .jam-toggle-knob {
    transform: translateX(16px);
  }

  .jam-id-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
  }

  .jam-id-code {
    flex: 1;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .jam-share-row {
    display: flex;
    gap: 8px;
    padding: 0 14px 12px;
  }

  .jam-qr-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 10px;
    border-top: 1px solid rgba(255,255,255,0.05);
  }

  .jam-qr-box img {
    width: 140px;
    height: 140px;
    border-radius: 8px;
  }

  .jam-qr-label {
    font-size: 11px;
    color: #444;
    letter-spacing: 0.3px;
  }

  .jam-q-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 14px;
    border-top: 1px solid rgba(255,255,255,0.03);
    transition: background 0.12s ease;
  }

  .jam-q-row:hover { background: rgba(255,255,255,0.03); }
  .jam-q-row.drag-src { opacity: 0.35; }
  .jam-q-row.drag-over { background: rgba(29,185,84,0.06); }

  .jam-drag-grip {
    color: #2a2a2e;
    cursor: grab;
    display: flex;
    align-items: center;
    transition: color 0.12s;
  }

  .jam-q-row:hover .jam-drag-grip { color: #444; }

  .jam-q-num {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: #2e2e34;
    min-width: 14px;
    text-align: right;
  }

  .jam-q-thumb {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .jam-q-thumb img { width: 100%; height: 100%; object-fit: cover; }
  .jam-q-thumb-ph { width: 100%; height: 100%; background: rgba(255,255,255,0.05); }

  .jam-q-meta {
    flex: 1;
    min-width: 0;
  }

  .jam-q-title {
    font-size: 12px;
    font-weight: 500;
    color: #c0c0c4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: -0.1px;
  }

  .jam-q-artist {
    font-size: 10px;
    color: #3a3a42;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 1px;
  }

  .jam-q-btns {
    display: flex;
    gap: 4px;
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  .jam-q-row:hover .jam-q-btns { opacity: 1; }

  .jam-q-btn {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    transition: all 0.12s ease;
    padding: 0;
  }

  .jam-q-btn.green {
    background: rgba(29,185,84,0.12);
    color: #1db954;
  }

  .jam-q-btn.green:hover {
    background: rgba(29,185,84,0.22);
  }

  .jam-q-btn.red {
    background: rgba(228,68,68,0.1);
    color: #e84444;
  }

  .jam-q-btn.red:hover {
    background: rgba(228,68,68,0.2);
  }

  .jam-member-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    border-top: 1px solid rgba(255,255,255,0.03);
  }

  .jam-avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    color: rgba(0,0,0,0.7);
    flex-shrink: 0;
    overflow: hidden;
  }

  .jam-avatar img { width: 100%; height: 100%; object-fit: cover; }

  .jam-member-info { flex: 1; min-width: 0; }

  .jam-member-name {
    font-size: 12px;
    font-weight: 500;
    color: #c0c0c4;
    letter-spacing: -0.1px;
  }

  .jam-member-role {
    font-size: 10px;
    color: #383840;
    margin-top: 1px;
  }

  .jam-footer {
    padding: 12px 16px;
    border-top: 1px solid rgba(255,255,255,0.05);
    background: rgba(0,0,0,0.2);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const JamMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const j = useJam();
    const [joinInput, setJoinInput] = useState('');
    const [qrUrl, setQrUrl] = useState('');
    const [copied, setCopied] = useState(false);
    const [showQr, setShowQr] = useState(false);
    const [dragIdx, setDragIdx] = useState<number | null>(null);
    const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);

    useEffect(() => {
        if (j.jamId) {
            QRCode.toDataURL(j.jamId, { width: 200, margin: 1, color: { dark: '#000', light: '#fff' } }).then(setQrUrl);
        }
    }, [j.jamId]);

    const copy = (text: string, msg: string) => {
        try { (Spicetify as any).Platform.ClipboardAPI.copy(text); } catch { navigator.clipboard?.writeText(text); }
        Spicetify.showNotification(msg);
    };

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!j.isHost && !j.guestControls) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        j.seekTo(pct * j.duration);
    };

    const pct = j.duration > 0 ? (j.progress / j.duration) * 100 : 0;
    const canEdit = j.isHost || j.guestControls;

    if (!j.connected) {
        return (
            <>
                <style>{styles}</style>
                <div className="jam-root">
                    <div className="jam-header">
                        <div className="jam-header-left">
                            <div className="jam-logo-icon">{I.jam}</div>
                            <div>
                                <div className="jam-title">Social Jam</div>
                                <div className="jam-subtitle">Listen together</div>
                            </div>
                        </div>
                        <button className="jam-icon-btn" onClick={onClose}>{I.close}</button>
                    </div>
                    <div className="jam-body">
                        {j.updateAvailable && (
                            <div className="jam-error" style={{ background: 'rgba(29,185,84,0.1)', borderColor: '#1db954', color: '#1db954', cursor: 'pointer', marginBottom: '10px' }}
                                onClick={() => window.open('https://github.com/Kyzenkms/spicetify-jam', '_blank')}>
                                <span style={{ fontSize: '14px' }}>✨ Update Available! Click to view</span>
                            </div>
                        )}
                        <div className="jam-hero">
                            <div className="jam-hero-icon">{I.jam}</div>
                            <h2 className="jam-hero-title">Host a Listening Session</h2>
                            <p className="jam-hero-desc">Sync playback and share your queue with friends in real-time.</p>
                        </div>
                        <button className="jam-btn green full" onClick={j.startJam}>Start a new Jam</button>
                        <div className="jam-divider"><div className="jam-divider-line"/><span>or join one</span><div className="jam-divider-line"/></div>
                        <input className="jam-input" placeholder="Paste Jam ID or join link…" value={joinInput}
                            onChange={e => setJoinInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && j.joinJam(joinInput)} spellCheck={false}/>
                        <button className="jam-btn outline full" style={{marginTop:8}} onClick={() => j.joinJam(joinInput)}>Join Session</button>
                        {j.error && <div className="jam-error">{I.warn} {j.error}</div>}
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <style>{styles}</style>
            <div className="jam-root">
                <div className="jam-header">
                    <div className="jam-header-left">
                        <div className="jam-logo-icon active">{I.jam}</div>
                        <div>
                            <div className="jam-title">Jam</div>
                            <div className="jam-subtitle">{j.isHost ? 'Hosting' : `With ${j.hostName}`}</div>
                        </div>
                    </div>
                    <div className="jam-header-right">
                        {!j.isHost && (
                            <span className={`jam-ping ${j.ping < 0 ? 'measuring' : j.ping > 150 ? 'bad' : 'good'}`}>
                                {j.ping < 0 ? '…' : `${j.ping}ms`}
                            </span>
                        )}
                        <button className="jam-icon-btn" onClick={onClose}>{I.close}</button>
                    </div>
                </div>

                <div className="jam-body scrollable">
                    {j.updateAvailable && (
                        <div className="jam-error" style={{ background: 'rgba(29,185,84,0.1)', borderColor: '#1db954', color: '#1db954', cursor: 'pointer' }}
                            onClick={() => window.open('https://github.com/Kyzenkms/spicetify-jam', '_blank')}>
                            <span style={{ fontSize: '14px' }}>✨ Update Available! Click to view</span>
                        </div>
                    )}

                    <div className="jam-live-badge">
                        <span className="jam-live-dot"/>
                        <span>Session Active</span>
                        <span className="jam-badge">{j.isHost ? 'HOST' : 'GUEST'}</span>
                    </div>

                    {j.nowPlaying && (
                        <div className="jam-np-card">
                            <div className="jam-np-art-wrap">
                                {j.nowPlaying.artUrl
                                    ? <img className="jam-np-art" src={j.nowPlaying.artUrl} alt="" onError={e => { (e.target as HTMLImageElement).style.display='none'; }}/>
                                    : <div className="jam-np-art placeholder"/>}
                            </div>
                            <div className="jam-np-meta">
                                <div className="jam-np-label">NOW PLAYING</div>
                                <div className="jam-np-title">{j.nowPlaying.title}</div>
                                <div className="jam-np-artist">{j.nowPlaying.artist}</div>
                            </div>
                            <div className="jam-progress-row">
                                <span className="jam-time">{fmtTime(j.progress)}</span>
                                <div className="jam-progress-rail"
                                    onClick={handleSeek}
                                    style={{ cursor: canEdit ? 'pointer' : 'default' }}>
                                    <div className="jam-progress-fill" style={{ width: `${pct}%` }}/>
                                    <div className="jam-progress-dot" style={{ left: `${pct}%` }}/>
                                </div>
                                <span className="jam-time">{fmtTime(j.duration)}</span>
                            </div>
                            {canEdit && (
                                <div className="jam-controls">
                                    <button className="jam-ctrl-btn" onClick={j.prev}>{I.prev}</button>
                                    <button className="jam-ctrl-btn main" onClick={j.isPlaying ? j.pause : j.play}>
                                        {j.isPlaying ? I.pause : I.play}
                                    </button>
                                    <button className="jam-ctrl-btn" onClick={j.next}>{I.next}</button>
                                </div>
                            )}
                        </div>
                    )}

                    {j.isHost && (
                        <div className="jam-section-card">
                            <div className="jam-section-title">{I.settings} SESSION SETTINGS</div>
                            <div className="jam-setting-row">
                                <span>Guest Playback Controls</span>
                                <button className={`jam-toggle ${j.guestControls ? 'on' : ''}`} onClick={j.toggleGuestControls}>
                                    <div className="jam-toggle-knob"/>
                                </button>
                            </div>
                        </div>
                    )}

                    {j.isHost && (
                        <div className="jam-section-card">
                            <div className="jam-section-title">INVITE</div>
                            <div className="jam-id-row">
                                <span className="jam-id-code">{j.jamId}</span>
                                <button
                                    className={`jam-icon-btn ${copied ? 'green' : ''}`}
                                    onClick={() => { copy(j.jamId, 'Copied!'); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                                >{copied ? I.check : I.copy}</button>
                            </div>
                            <div className="jam-share-row">
                                <button className="jam-btn outline flex-1"
                                    onClick={() => copy(`${window.location.origin}${window.location.pathname}#jam=${j.jamId}`, 'Link copied!')}>
                                    {I.link} Copy Link
                                </button>
                                <button className="jam-btn outline flex-1" onClick={() => setShowQr(v => !v)}>
                                    {I.qr} {showQr ? 'Hide QR' : 'QR Code'}
                                </button>
                            </div>
                            {showQr && qrUrl && (
                                <div className="jam-qr-box">
                                    <img src={qrUrl} alt="QR"/>
                                    <div className="jam-qr-label">Scan to join</div>
                                </div>
                            )}
                        </div>
                    )}

                    {j.queue.length > 0 && (
                        <div className="jam-section-card">
                            <div className="jam-section-title">{I.queue} UP NEXT · {j.queue.length}</div>
                            {j.queue.map((t, i) => (
                                <div
                                    key={`${t.uri}-${i}`}
                                    className={`jam-q-row${dragIdx === i ? ' drag-src' : ''}${dragOverIdx === i && dragIdx !== i ? ' drag-over' : ''}`}
                                    draggable={canEdit}
                                    onDragStart={() => setDragIdx(i)}
                                    onDragOver={e => { e.preventDefault(); setDragOverIdx(i); }}
                                    onDrop={() => { if (dragIdx !== null && dragIdx !== i) j.moveInQueue(dragIdx, i); setDragIdx(null); setDragOverIdx(null); }}
                                    onDragEnd={() => { setDragIdx(null); setDragOverIdx(null); }}
                                >
                                    {canEdit && <div className="jam-drag-grip">{I.drag}</div>}
                                    <div className="jam-q-num">{i + 1}</div>
                                    <div className="jam-q-thumb">
                                        {t.artUrl
                                            ? <img src={t.artUrl} alt="" onError={e => { (e.target as HTMLImageElement).style.display='none'; }}/>
                                            : <div className="jam-q-thumb-ph"/>}
                                    </div>
                                    <div className="jam-q-meta">
                                        <div className="jam-q-title">{t.title}</div>
                                        <div className="jam-q-artist">{t.artist}</div>
                                    </div>
                                    {canEdit && (
                                        <div className="jam-q-btns">
                                            <button className="jam-q-btn green" title="Play now" onClick={() => j.jumpToTrack(t.uri!)}>{I.playItem}</button>
                                            <button className="jam-q-btn red" title="Remove" onClick={() => j.removeFromQueue(t.uri!, t.uid)}>{I.x}</button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="jam-section-card">
                        <div className="jam-section-title">{I.people} LISTENERS · {j.members.length}</div>
                        {j.members.map((m, i) => (
                            <div key={m.id + i} className="jam-member-row">
                                <div className="jam-avatar" style={{ background: COLORS[i % COLORS.length] }}>
                                    {m.image
                                        ? <img src={m.image} alt="" onError={e => { (e.target as HTMLImageElement).style.display='none'; }}/>
                                        : safeInitial(m.name)}
                                </div>
                                <div className="jam-member-info">
                                    <div className="jam-member-name">{m.name || 'Listener'}</div>
                                    <div className="jam-member-role">{m.isHost ? '● Host' : '○ Listener'}</div>
                                </div>
                                {j.isHost && !m.isHost && (
                                    <button className="jam-icon-btn small red" onClick={() => j.kickMember(m.id)}>{I.kick}</button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="jam-footer">
                    {!j.isHost && (
                        <button className="jam-btn outline full" onClick={j.requestSync}>
                            Sync to Host
                        </button>
                    )}
                    <button className="jam-btn red full" onClick={j.leaveJam}>
                        {I.leave} {j.isHost ? 'End Jam' : 'Leave Jam'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default JamMenu;