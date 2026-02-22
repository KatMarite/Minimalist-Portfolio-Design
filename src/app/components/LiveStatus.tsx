import { useState, useEffect } from 'react';
import { Clock, Code } from 'lucide-react';

export function LiveStatus() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // Default to local generic fallback so there's no layout jitter, but format it nicely
            const timeString = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
            setTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000); // update every second for live feel
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 rounded-full px-8 py-4 shadow-sm backdrop-blur-md">
            <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest">Live</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-gray-200 dark:bg-gray-800"></div>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <Clock size={16} className="text-gray-400 dark:text-gray-500" />
                <span className="w-[100px] text-left">Local, {time}</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-gray-200 dark:bg-gray-800"></div>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <Code size={16} className="text-gray-400 dark:text-gray-500" />
                <span>Last commit: <span className="text-blue-600 dark:text-blue-400 font-mono">1 hr ago</span></span>
            </div>
        </div>
    );
}
