import React from 'react';
import { TimelineItem } from '../../types';

export const WorkItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col">
            {item.image && (
                <div>
                    <img src={item.image} alt={item.organization} className="w-full h-48 object-cover" />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                <div className="mb-2">
                    <span className="text-lg font-medium text-slate-700">{item.organization}</span>
                    <span className="mx-2 text-slate-400">•</span>
                    <span className="text-slate-600">{item.location}</span>
                </div>
                <div className="text-sm text-slate-500 mb-4">{item.date}</div>
                <p className="text-slate-600 mb-4">{item.description}</p>
                {item.technologies && (
                    <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                            >
                {tech}
              </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
);
