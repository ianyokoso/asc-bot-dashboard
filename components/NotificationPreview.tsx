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
                  <span className="icon">👥</span> {notif.targets.join(', ')}
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
                    background: rgba(15, 23, 42, 0.4); /* Darker background for visibility */
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 12px;
                    padding: 14px 20px;
                    margin-top: 40px; /* Separator for bottom placement */
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(12px);
                }
                .compact-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 12px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                .title {
                    font-size: 14px;
                    font-weight: 800;
                    color: #fff;
                    letter-spacing: -0.02em;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }
                .refresh-badge {
                    font-size: 10px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.4);
                    background: rgba(255, 255, 255, 0.05);
                    padding: 2px 8px;
                    border-radius: 100px;
                }
                .compact-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .compact-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                .compact-item:last-child {
                    border-bottom: none;
                }
                .main-info {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .time {
                    font-size: 12px;
                    font-weight: 900;
                    color: #f72585; /* Vibrant pink for high visibility */
                    background: rgba(247, 37, 133, 0.1);
                    padding: 3px 8px;
                    border-radius: 6px;
                    font-family: 'Inter', system-ui, sans-serif;
                }
                .type {
                    font-size: 13px;
                    font-weight: 700;
                    color: #fff; /* Solid white */
                }
                .countdown {
                    font-size: 11px;
                    font-weight: 500;
                    color: #a5b4fc; /* Light blue */
                }
                .target-info {
                    text-align: right;
                }
                .targets {
                    font-size: 12px;
                    font-weight: 500;
                    color: #e2e8f0; /* Near white */
                }
                .icon {
                    opacity: 0.8;
                    margin-right: 4px;
                }
                .targets-none {
                    font-size: 12px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.4);
                }
                .extra {
                    color: #4ade80; /* Success green */
                    font-weight: 700;
                }
                .error-small {
                    font-size: 11px;
                    color: #f87171;
                    font-weight: 600;
                    margin-top: 8px;
                }
            `}</style>
    </div>
  );
}
