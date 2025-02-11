import React from 'react';
import { TimelineItem } from '../../types';

export const EducationItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
        <div className="mb-2">
            <span className="text-lg font-medium text-slate-700">{item.organization}</span>
        </div>
        <div className="text-sm text-slate-500 mb-4">{item.date}</div>
        <p className="text-slate-600">{item.description}</p>
    </div>
);
