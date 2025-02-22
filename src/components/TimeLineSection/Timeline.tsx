// Timeline.tsx

import { TimelineItem } from '../../types.ts';
import { timelineItems } from '../../data/TimelineItems.ts';
import { TimelineCard } from './TimeLineCard.tsx';

interface TimelineProps {
    items?: TimelineItem[];
}

export function Timeline({ items = timelineItems }: TimelineProps) {
    return (
        <div className="max-w-7xl mx-auto py-12 pl-2 pr-2">
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-slate-200 transform -translate-x-1/2"></div>

                {/* Timeline cards */}
                <div className="space-y-12">
                    {items.map((item, index) => (
                        <TimelineCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
