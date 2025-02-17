import {Plus, Minus} from "lucide-react";
import {useState} from "react";
import {TimelineItem, TechSkillItem, HobbyListItem, ResumeJson} from "../../types";
import {technicalSkills} from "../../data/techSkillsInfo.ts";
import {hobbies} from "../../data/hobbiesData";

// Fixed order for resume sections.
const sectionOrder = ["education", "work", "research", "project", "technologies", "award", "hobby"];


function createResumeJson(timelineItems: TimelineItem[], techCategories: TechSkillItem[], hobbyItems: HobbyListItem[]): ResumeJson {
    const grouped: ResumeJson = {};
    sectionOrder.forEach((key) => {
        if (key === "technologies") {
            for (const tech of techCategories) {
                grouped[tech.techSkill] = tech.items;
            }
        } else if (key === "hobby") {
            grouped[key] = hobbyItems.map((i) => i.title);
        } else if (key === "award") {
            const filteredItems = timelineItems.filter((item) => item.type.toLowerCase() === key);
            grouped[key] = filteredItems.map((i) => i.resumeItem ? i.resumeItem[0] : i.title);
        } else {
            const filteredItems = timelineItems.filter((item) => item.type.toLowerCase() === key);
            if (filteredItems.length > 0) {
                grouped[key] = filteredItems;
            }
        }
    });
    return grouped;
}

interface ResumeBuilderProps {
    timelineItems: TimelineItem[];
    selectedResumeItems: ResumeJson;
    onSelectionChange: (newSelection: ResumeJson) => void;
}

export function ResumeBuilder({timelineItems, selectedResumeItems, onSelectionChange}: ResumeBuilderProps) {

    const fullResumeJson = createResumeJson(timelineItems, technicalSkills, hobbies);

    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(() => {
        const initial: { [key: string]: boolean } = {};
        sectionOrder.forEach((key) => {
            initial[key] = true; // set to true to keep them open by default
        });
        return initial;
    });

    const toggleSection = (sectionKey: string) => {
        setOpenSections((prev) => ({...prev, [sectionKey]: !prev[sectionKey]}));
    };

    const toggleResumeItem = (type: string, item: string | TimelineItem) => {
        const updated = {...selectedResumeItems};
        const current = updated[type] ?? [];
        if (typeof item === "string") {
            if ((current as string[]).includes(item)) {
                updated[type] = (current as string[]).filter((i) => i !== item);
            } else {
                updated[type] = [...(current as string[]), item];
            }
        } else {
            if ((current as TimelineItem[]).some((i) => i.title === item.title)) {
                updated[type] = (current as TimelineItem[]).filter((i) => i.title !== item.title);
            } else {
                updated[type] = [...(current as TimelineItem[]), item];
            }
        }
        onSelectionChange(updated);
    };

    const renderTimelineSection = (sectionKey: string, items: TimelineItem[] | string[]) => {
        if (!items || items.length === 0) return null;
        const header = sectionKey.charAt(0).toUpperCase() + (
            sectionKey.slice(1) === "obby" ? "obbies" :
                sectionKey.slice(1) === "ward" ? "wards" :
                    sectionKey.slice(1)
        );

        return (
            <div
                key={sectionKey}
                className={`mb-8 pt-4 pl-4 pr-4 cursor-pointer rounded-lg border-2 border-slate-200 hover:border-slate-400 ${
                    openSections[sectionKey] ? "pb-4" : ""
                }`}
                onClick={() => toggleSection(sectionKey)}

            >
                <div className="flex justify-between items-center mb-4">
                    <div className={"flex gap-2 items-center justify-center"}>
                        {/*{openSections[sectionKey] ? (*/}
                        {/*    <Minus*/}
                        {/*        className="w-8 h-8"*/}
                        {/*    />*/}
                        {/*) : (*/}
                        {/*    <Plus*/}
                        {/*        className="w-8 h-8"*/}
                        {/*    />*/}
                        {/*)}*/}
                        <h3 className="text-xl font-semibold text-slate-800">{header}</h3>
                    </div>


                    <div className={"flex gap-2"}>
                        {openSections[sectionKey] ? (
                            <Minus
                                className="w-8 h-8"
                            />
                        ) : (
                            <Plus
                                className="w-8 h-8"
                            />
                        )}
                    </div>

                </div>
                {openSections[sectionKey] && (
                    <div className="space-y-4">
                        {items.map((item) => (
                            Array.isArray(fullResumeJson[sectionKey]) ? (
                                typeof item === "string" ? (
                                    <div
                                        key={item}
                                        className={`p-4 rounded-lg border-2 transition-all cursor-pointer flex items-center ${
                                            selectedResumeItems[sectionKey] &&
                                            selectedResumeItems[sectionKey].find((i) => i === item)
                                                ? "border-slate-700 bg-slate-50"
                                                : "border-slate-200 hover:border-slate-400"
                                        }`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleResumeItem(sectionKey, item);
                                        }}
                                    >
                                        {/*{item.icon && <item.icon className="w-5 h-5 text-slate-600 mr-3"/>}*/}
                                        <div>
                                            <h3 className="font-semibold text-slate-800">{item}</h3>
                                            {/*<p className="text-sm text-slate-600">*/}
                                            {/*    {item.organization} • {item.date}*/}
                                            {/*</p>*/}
                                            {/*{item.description && Array.isArray(item.description) && (*/}
                                            {/*    <ul className="list-none pl-0 mt-2 space-y-2">*/}
                                            {/*        {item.description.map((desc, i) => (*/}
                                            {/*            <li key={i} className="text-slate-500">*/}
                                            {/*                {desc}*/}
                                            {/*            </li>*/}
                                            {/*        ))}*/}
                                            {/*    </ul>*/}
                                            {/*)}*/}
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        key={item.title}
                                        className={`p-4 rounded-lg border-2 transition-all cursor-pointer flex items-center ${
                                            selectedResumeItems[sectionKey] &&
                                            (selectedResumeItems[sectionKey] as TimelineItem[]).find((i) => i.title === item.title)
                                                ? "border-slate-700 bg-slate-50"
                                                : "border-slate-200 hover:border-slate-400"
                                        }`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleResumeItem(sectionKey, item);
                                        }}
                                    >
                                        {item.icon && <item.icon className="w-5 h-5 text-slate-600 mr-3"/>}
                                        <div>
                                            <h3 className="font-semibold text-slate-800">{item.title}</h3>
                                            <p className="text-sm text-slate-600">
                                                {item.organization} • {item.date}
                                            </p>
                                            {/*{item.description && Array.isArray(item.description) && (*/}
                                            {/*    <ul className="list-none pl-0 mt-2 space-y-2">*/}
                                            {/*        {item.description.map((desc, i) => (*/}
                                            {/*            <li key={i} className="text-slate-500">*/}
                                            {/*                {desc}*/}
                                            {/*            </li>*/}
                                            {/*        ))}*/}
                                            {/*    </ul>*/}
                                            {/*)}*/}
                                        </div>
                                    </div>
                                )
                            ) : (
                                <div key={typeof item === "string" ? item : item.title}></div>
                            )
                        ),)}
                    </div>
                )}
            </div>

        );
    };

    return (
        <div className="space-y-8">
            {sectionOrder.map((sectionKey) => {
                if (sectionKey === "technologies") {
                    return technicalSkills.map((tech) => renderTimelineSection(tech.techSkill, fullResumeJson[tech.techSkill]));
                } else {
                    return renderTimelineSection(sectionKey, fullResumeJson[sectionKey]);
                }
            })}
        </div>
    );

}
