import {Star} from 'lucide-react';
import {HobbyItem, HobbyListItem} from "../../../types.ts";


export function HobbyCards({HobbyInfo, HobbyItems}: {HobbyInfo: HobbyListItem, HobbyItems: HobbyItem[]}) {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Hobbies & Interests</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <HobbyInfo.icon className="w-8 h-8 text-slate-600 mr-3"/>
                        <h3 className="text-2xl font-semibold text-slate-800">{HobbyInfo.title}</h3>
                    </div>
                </div>
                {HobbyInfo.details && (
                    <div>
                        <h4 className="text-xl font-semibold text-slate-800 mb-4">Details</h4>
                        {HobbyInfo.details}
                    </div>
                )}
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {HobbyItems.map((HobbyItem) => (
                            <div key={HobbyItem.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src={HobbyItem.image}
                                    alt={HobbyItem.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-semibold text-slate-800">{HobbyItem.title}</h3>
                                        {HobbyItem.rating && (
                                            <div className="flex items-center">
                                                <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                                                <span className="ml-1 text-sm text-slate-600">{HobbyItem.rating}</span>
                                            </div>
                                        )}
                                    </div>
                                    {HobbyItem.year && (
                                        <div className="text-sm text-slate-500 mb-2">{HobbyItem.year}</div>
                                    )}
                                    {HobbyItem.items && (
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {HobbyItem.items.map((g, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs"
                                                >
                                                    {g}
                                                  </span>
                                            ))}
                                        </div>
                                    )}
                                    {HobbyItem.description && (
                                        <p className="text-slate-600 text-sm">{HobbyItem.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}