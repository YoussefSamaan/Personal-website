import React from 'react';
import { TimelineItem } from '../../types';

export const ProjectItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col">
            {item.image && (
                <div>
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                <div className="text-sm text-slate-500 mb-4">{item.date}</div>
                <p className="text-slate-600 mb-4">{item.description}</p>
                {item.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
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
                {item.links && (
                    <div className="flex gap-4">
                        {item.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-slate-800 underline"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
);
