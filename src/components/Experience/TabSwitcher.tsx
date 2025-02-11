import React from 'react';

interface TabSwitcherProps {
    activeTab: 'work' | 'education' | 'projects';
    onTabChange: (tab: 'work' | 'education' | 'projects') => void;
}

export const TabSwitcher: React.FC<TabSwitcherProps> = ({ activeTab, onTabChange }) => {
    return (
        <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-white rounded-lg shadow-sm p-1">
                {(['work', 'education', 'projects'] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => onTabChange(tab)}
                        className={`px-4 py-2 rounded-md transition-colors ${
                            activeTab === tab ? 'bg-slate-700 text-white' : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
};
