import React, {useEffect, useState} from 'react';
import { TimelineItem } from '../../types';
import { TabSwitcher } from './TabSwitcher';
import { TimelineSection } from './TimelineSection';
import { WorkItem } from './WorkItem';
import { EducationItem } from './EducationItem';
import { ProjectItem } from './ProjectItem';
import {useNavigate, useParams} from "react-router-dom";

interface WorkExperienceProps {
    workItems: TimelineItem[];
    educationItems: TimelineItem[];
    projectItems: TimelineItem[];
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({
                                                                  workItems,
                                                                  educationItems,
                                                                  projectItems,
                                                              }) => {
    const [activeTab, setActiveTab] = useState<'work' | 'education' | 'projects'>('work');
    const navigate = useNavigate();
    const { tab } = useParams<'tab'>();

    useEffect(() => {
        if (tab) {
            setActiveTab(tab as 'work' | 'education' | 'projects');
        } else {
            setActiveTab('work');
        }
    }, [tab]);

    const handleTabChange = (tab: 'work' | 'education' | 'projects') => {
        setActiveTab(tab);
        navigate(`/experience/${tab}`);
    };

    const renderTimeline = () => {
        if (activeTab === 'work') {
            return (
                <TimelineSection
                    items={workItems}
                    activeTab={activeTab}
                    ItemComponent={WorkItem}
                />
            );
        } else if (activeTab === 'education') {
            return (
                <TimelineSection
                    items={educationItems}
                    activeTab={activeTab}
                    ItemComponent={EducationItem}
                />
            );
        } else if (activeTab === 'projects') {
            return (
                <TimelineSection
                    items={projectItems}
                    activeTab={activeTab}
                    ItemComponent={ProjectItem}
                />
            );
        }
    };

    return (
        <div className="max-w-7xl mx-auto py-12 pr-2 pl-2">
            <TabSwitcher activeTab={activeTab} onTabChange={handleTabChange} />
            {renderTimeline()}
        </div>
    );
};
