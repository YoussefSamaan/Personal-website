import React from 'react';
import { Building2, GraduationCap, Code } from 'lucide-react';

interface TimelineSectionProps {
    items: any[];
    activeTab: 'work' | 'education' | 'projects';
    ItemComponent: React.ComponentType<{ item: any }>;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ items, activeTab, ItemComponent }) => {
    const renderIcon = () => {
        if (activeTab === 'work') return <Building2 className="w-4 h-4 text-slate-600" />;
        if (activeTab === 'education') return <GraduationCap className="w-4 h-4 text-slate-600" />;
        if (activeTab === 'projects') return <Code className="w-4 h-4 text-slate-600" />;
    };

    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-slate-200 transform -translate-x-1/2"></div>

            <div className="space-y-12">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        {/* Icon on the timeline */}
                        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
                                {renderIcon()}
                            </div>
                        </div>

                        {/* Timeline content */}
                        <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                            <ItemComponent item={item} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};