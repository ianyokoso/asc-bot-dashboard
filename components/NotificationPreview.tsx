import React, { useState, useEffect } from 'react';

interface Notification {
  type: string;
  time: string;
  countdown: string;
  targets: string[];
  count: number | string;
  icon: string;
}

interface PreviewResponse {
  success: boolean;
  notifications: Notification[];
  last_updated: string;
}

// [FIX] URL Logic: Same as App.tsx
const isProxyNeeded = window.location.hostname === 'localhost' || window.location.hostname.includes('vercel.app');
const API_BASE_URL = isProxyNeeded ? '/api-proxy' : 'http://168.107.16.76:8000';

export default function NotificationPreview() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const fetchPreview = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/notifications/preview`);
      const data: PreviewResponse = await response.json();
      if (data.success) {
        setNotifications(data.notifications);
        setError('');
      }
    } catch (err) {
      setError('Connection failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPreview();
    const interval = setInterval(fetchPreview, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading && notifications.length === 0) return null;

  return (
    <div className="compact-preview">
      <div className="compact-header">
        <span className="title">🚀 Upcoming Notifications</span>
        <span className="refresh-badge">Auto-refreshes in 5m</span>
      </div>

      <div className="compact-list">
        {notifications.map((notif, index) => (
          <div key={index} className="compact-item">
            <div className="main-info">
              <span className="time">{notif.time}</span>
              <span className="type">{notif.type}</span>
              <span className="countdown">({notif.countdown})</span>
            </div>
            <div className="target-info">
              {notif.targets && notif.targets.length > 0 ? (
                <span className="targets">
                  👥 {notif.targets.join(', ')}
                  {typeof notif.count === 'number' && notif.count > notif.targets.length &&
                    <span className="extra"> 외 {notif.count - notif.targets.length}명</span>
                  }
                </span>
              ) : (
                <span className="targets-none">👥 Target: {notif.count}</span>
              )}
            </div>
          </div>
        ))}
        {error && <div className="error-small">⚠️ {error}</div>}
      </div>

      <style jsx>{`
                .compact-preview {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 12px 16px;
                    margin-bottom: 20px;
                    backdrop-filter: blur(8px);
                }
                .compact-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                    padding-bottom: 6px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                .title {
                    font-size: 13px;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.9);
                    letter-spacing: -0.01em;
                }
                .refresh-badge {
                    font-size: 10px;
                    color: rgba(255, 255, 255, 0.4);
                }
                .compact-list {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .compact-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 6px 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
                }
                .compact-item:last-child {
                    border-bottom: none;
                }
                .main-info {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .time {
                    font-size: 12px;
                    font-weight: 800;
                    color: #fff;
                    background: rgba(255, 255, 255, 0.1);
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-family: 'JetBrains Mono', monospace;
                }
                .type {
                    font-size: 12px;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.85);
                }
                .countdown {
                    font-size: 11px;
                    color: rgba(255, 255, 255, 0.5);
                }
                .target-info {
                    text-align: right;
                }
                .targets {
                    font-size: 11px;
                    color: rgba(255, 255, 255, 0.7);
                }
                .targets-none {
                    font-size: 11px;
                    color: rgba(255, 255, 255, 0.4);
                }
                .extra {
                    color: #a5b4fc;
                    font-weight: 600;
                }
                .error-small {
                    font-size: 10px;
                    color: #fda4af;
                    margin-top: 4px;
                }
            `}</style>
    </div>
  );
}
