import React, { useEffect } from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    visible: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, visible, onClose }) => {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    if (!visible) return null;

    return (
        <div className={`fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-lg text-white font-medium transform transition-all duration-300 z-50 flex items-center gap-2 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } ${type === 'success' ? 'bg-emerald-500' : 'bg-rose-500'}`}>
            {type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
            {message}
        </div>
    );
};

export default Toast;
