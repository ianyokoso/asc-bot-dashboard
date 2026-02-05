import React, { useState, useEffect } from 'react';

interface Notification {
    type: string;
    time: string;
    date: string;
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

export default function NotificationPreview() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [lastUpdated, setLastUpdated] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const fetchPreview = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/notifications/preview');
            const data: PreviewResponse = await response.json();

            if (data.success) {
                setNotifications(data.notifications);
                setLastUpdated(data.last_updated);
                setError('');
            } else {
                setError('알림 정보를 불러오는데 실패했습니다.');
            }
        } catch (err) {
            console.error('Failed to fetch notification preview:', err);
            setError('서버 연결 실패');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Initial fetch
        fetchPreview();

        // Auto-refresh every 5 minutes
        const interval = setInterval(fetchPreview, 5 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    if (loading && notifications.length === 0) {
        return (
            <div className="notification-preview-card loading">
                <h3>🔔 다음 예정 알림</h3>
                <p>로딩 중...</p>
            </div>
        );
    }

    return (
        <div className="notification-preview-card">
            <div className="preview-header">
                <h3>🔔 다음 예정 알림</h3>
                <span className="last-updated">
                    🔄 {lastUpdated ? `마지막 업데이트: ${lastUpdated}` : '5분마다 자동 갱신'}
                </span>
            </div>

            {error && (
                <div className="preview-error">
                    ⚠️ {error}
                </div>
            )}

            {notifications.length === 0 && !error ? (
                <div className="preview-empty">
                    <p>예정된 알림이 없습니다.</p>
                </div>
            ) : (
                <div className="preview-list">
                    {notifications.map((notif, index) => (
                        <div key={index} className="preview-item">
                            <div className="preview-item-header">
                                <span className="preview-icon">{notif.icon}</span>
                                <span className="preview-time">
                                    {notif.time} <span className="preview-countdown">({notif.countdown})</span>
                                </span>
                            </div>
                            <div className="preview-item-body">
                                <p className="preview-type">{notif.type}</p>
                                <p className="preview-targets">
                                    👥 대상: {typeof notif.count === 'number' ? `${notif.count}명` : notif.count}
                                    {notif.targets && notif.targets.length > 0 && (
                                        <span className="preview-names">
                                            {' '}({notif.targets.join(', ')}
                                            {typeof notif.count === 'number' && notif.count > notif.targets.length &&
                                                ` 외 ${notif.count - notif.targets.length}명`})
                                        </span>
                                    )}
                                </p>
                                {notif.date && (
                                    <p className="preview-date">📅 {notif.date}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <style jsx>{`
        .notification-preview-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
          color: white;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        }

        .preview-header h3 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
        }

        .last-updated {
          font-size: 12px;
          opacity: 0.8;
        }

        .preview-error {
          background: rgba(255, 59, 48, 0.2);
          border: 1px solid rgba(255, 59, 48, 0.4);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 16px;
        }

        .preview-empty {
          text-align: center;
          padding: 32px;
          opacity: 0.7;
        }

        .preview-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .preview-item {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 16px;
          transition: transform 0.2s, background 0.2s;
        }

        .preview-item:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.2);
        }

        .preview-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .preview-icon {
          font-size: 24px;
        }

        .preview-time {
          font-size: 18px;
          font-weight: 600;
        }

        .preview-countdown {
          font-size: 14px;
          opacity: 0.8;
          font-weight: 400;
        }

        .preview-item-body {
          margin-top: 8px;
        }

        .preview-type {
          font-size: 16px;
          font-weight: 600;
          margin: 4px 0;
        }

        .preview-targets {
          font-size: 14px;
          opacity: 0.9;
          margin: 4px 0;
        }

        .preview-names {
          font-size: 12px;
          opacity: 0.7;
        }

        .preview-date {
          font-size: 12px;
          opacity: 0.7;
          margin: 4px 0;
        }

        .loading {
          text-align: center;
          padding: 32px;
        }
      `}</style>
        </div>
    );
}
