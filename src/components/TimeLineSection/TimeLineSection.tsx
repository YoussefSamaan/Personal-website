// TimelineSection.tsx
import React from 'react';
import { TimelineItem } from '../../types';

interface TimelineSectionProps {
    items: TimelineItem[];
    renderItem: (item: TimelineItem, index: number) => React.ReactNode;
    mode?: 'left' | 'right' | 'center';
}

export function TimelineSection({
                                    items,
                                    renderItem,
                                    mode = 'center',
                                }: TimelineSectionProps) {
    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-slate-200 transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
                {items.map((item, index) => {
                    // Determine layout based on mode
                    let layoutClass: string;
                    let contentMarginClass: string;

                    if (mode === 'center') {
                        layoutClass = index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';
                        contentMarginClass = index % 2 === 0 ? 'md:pr-8' : 'md:pl-8';
                    } else if (mode === 'left') {
                        layoutClass = 'md:flex-row';
                        contentMarginClass = 'md:pr-8';
                    } else {
                        // mode === 'right'
                        layoutClass = 'md:flex-row-reverse';
                        contentMarginClass = 'md:pl-8';
                    }

                    return (
                        <div
                            key={item.id}
                            className={`relative flex items-center ${layoutClass}`}
                        >
                            {/* Icon */}
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
                                    <item.icon className="w-4 h-4 text-slate-600" />
                                </div>
                            </div>
                            {/* Content */}
                            <div className={`ml-12 md:ml-0 md:w-1/2 ${contentMarginClass}`}>
                                {renderItem(item, index)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
