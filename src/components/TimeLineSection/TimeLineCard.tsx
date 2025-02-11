import { TimelineItem } from '../../types';

interface TimelineCardProps {
    item: TimelineItem;
    index: number;
}

export function TimelineCard({ item, index }: TimelineCardProps) {
    return (
        <div
            className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
        >
            {/* Line and Icon */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-slate-600" />
                </div>
            </div>

            {/* Content */}
            <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}
            >
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    {item.date && (
                        <span className="text-sm font-medium text-slate-500">
              {item.date}
            </span>
                    )}
                    <h3 className="mt-2 text-lg font-semibold text-slate-800">
                        {item.title}
                    </h3>
                    {item.organization && (
                        <p className="text-slate-600 font-medium">
                            {item.organization}
                        </p>
                    )}
                    {item.description &&
                        (Array.isArray(item.description) ? (
                            item.description.map((desc, i) => (
                                <p key={i} className="mt-2 text-slate-500">
                                    {desc}
                                </p>
                            ))
                        ) : (
                            <p className="mt-2 text-slate-500">{item.description}</p>
                        ))}
                </div>
            </div>
        </div>
    );
}
