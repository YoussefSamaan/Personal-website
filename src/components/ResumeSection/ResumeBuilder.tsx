import {PDFDownloadLink} from "@react-pdf/renderer";
import {ResumePDF} from "./ResumePDF.tsx";
import {Download} from "lucide-react";
import {TimelineItem} from "../../types.ts";
import {useState} from "react";


function groupTimelineItemsByType(items: TimelineItem[]): { [type: string]: TimelineItem[] } {
    const groupedItems: { [type: string]: TimelineItem[] } = {};

    items.forEach((item) => {
        const type = item.type;
        if (!groupedItems[type]) {
            groupedItems[type] = [];
        }
        groupedItems[type].push(item);
    });

    return groupedItems;
}



export function ResumeBuilder( { timelineItems }: { timelineItems: TimelineItem[] } ) {
    const [selectedItems, setSelectedItems] = useState<TimelineItem[]>([]);

    const toggleItem = (item: TimelineItem) => {
        setSelectedItems(prev =>
            prev.find(i => i.id === item.id)
                ? prev.filter(i => i.id !== item.id)
                : [...prev, item]
        );
    };

    const groupedItems = groupTimelineItemsByType(timelineItems);

    return (
        <div className="space-y-8">
            {Object.keys(groupedItems).map((type, index) => (
                <div key={type}>
                    <div className="flex justify-between pt-0 mb-4">
                        <h3 className="text-xl font-semibold text-slate-800">{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                        {index === 0 && selectedItems.length > 0 && (
                            <PDFDownloadLink
                                document={<ResumePDF selectedItems={selectedItems} />}
                                fileName="Youssef_Samaaen_Resume.pdf"
                                className="inline-flex items-center px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 transition-colors"
                            >
                            <Download className="w-4 h-4 mr-2" />
                            Export PDF
                            </PDFDownloadLink>
                        )}
                    </div>
                    <div className="space-y-4">
                        {groupedItems[type].map((item) => (
                            <div
                                key={item.id}
                                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                                    selectedItems.find(i => i.id === item.id)
                                        ? 'border-slate-700 bg-slate-50'
                                        : 'border-slate-200 hover:border-slate-400'
                                }`}
                                onClick={() => toggleItem(item)}
                            >
                                <div className="flex items-center">
                                    <item.icon className="w-5 h-5 text-slate-600 mr-3" />
                                    <div>
                                        <h3 className="font-semibold text-slate-800">{item.title}</h3>
                                        <p className="text-sm text-slate-600">{item.organization} • {item.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
