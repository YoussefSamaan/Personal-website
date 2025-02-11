import React from 'react';
import { Building2, GraduationCap, Code } from 'lucide-react';

interface TimelineSectionProps {
    items: any[];
    activeTab: 'work' | 'education' | 'projects';
    ItemComponent: React.ComponentType<{ item: any }>;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ items, activeTab, ItemComponent }) => {
    const renderIcon = () => {
        if (activeTab === 'work') return <Building2 className="w-4 h-4 text-slate-600" />;
        if (activeTab === 'education') return <GraduationCap className="w-4 h-4 text-slate-600" />;
        if (activeTab === 'projects') return <Code className="w-4 h-4 text-slate-600" />;
    };

    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-slate-200 transform -translate-x-1/2"></div>

            <div className="space-y-12">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        {/* Icon on the timeline */}
                        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
                                {renderIcon()}
                            </div>
                        </div>

                        {/* Timeline content */}
                        <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                            <ItemComponent item={item} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// import React from 'react';
// import { Building2, GraduationCap, Code } from 'lucide-react';
//
// interface TimelineSectionProps {
//     items: any[];
//     activeTab: 'work' | 'education' | 'projects';
//     ItemComponent: React.ComponentType<{ item: any }>;
//     mode?: 'left' | 'right' | 'center';
// }
//
// export const TimelineSection: React.FC<TimelineSectionProps> = ({
//                                                                     items,
//                                                                     activeTab,
//                                                                     ItemComponent,
//                                                                     mode = 'center', // default mode
//                                                                 }) => {
//     const renderIcon = () => {
//         if (activeTab === 'work') return <Building2 className="w-4 h-4 text-slate-600" />;
//         if (activeTab === 'education') return <GraduationCap className="w-4 h-4 text-slate-600" />;
//         if (activeTab === 'projects') return <Code className="w-4 h-4 text-slate-600" />;
//     };
//
//     return (
//         <div className="relative">
//             {/* Vertical timeline line */}
//             <div
//                 className={`absolute top-0 bottom-0 w-0.5 bg-slate-200 ${
//                     mode === 'center'
//                         ? 'left-1/2 transform -translate-x-1/2'
//                         : mode === 'left'
//                             ? 'left-4'
//                             : 'right-4'
//                 }`}
//             ></div>
//
//             <div className="space-y-12">
//                 {items.map((item, index) => {
//                     if (mode === 'center') {
//                         // Alternate items: even-indexed items are on the left, odd-indexed on the right.
//                         const isLeft = index % 2 === 0;
//                         return (
//                             <div key={item.id} className="relative">
//                                 {/* For medium and up, place the icon absolutely at the center */}
//                                 <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2">
//                                     <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
//                                         {renderIcon()}
//                                     </div>
//                                 </div>
//                                 <div className="md:flex md:items-center">
//                                     {isLeft && (
//                                         <div className="md:w-1/2 md:pr-8 text-right">
//                                             {/* Add top margin on small screens to avoid overlap with the icon */}
//                                             <div className="mt-8 md:mt-0">
//                                                 <ItemComponent item={item} />
//                                             </div>
//                                         </div>
//                                     )}
//                                     {/* On mobile, show the icon inline */}
//                                     <div className="md:hidden flex justify-center mb-4">
//                                         <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
//                                             {renderIcon()}
//                                         </div>
//                                     </div>
//                                     {!isLeft && (
//                                         <div className="md:w-1/2 md:pl-8 text-left">
//                                             <div className="mt-8 md:mt-0">
//                                                 <ItemComponent item={item} />
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         );
//                     } else if (mode === 'left') {
//                         // In left mode, always display content to the right.
//                         return (
//                             <div key={item.id} className="relative md:flex md:items-center">
//                                 {/* Icon placed at the left */}
//                                 <div className="hidden md:block absolute top-0 left-4 transform -translate-x-1/2">
//                                     <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
//                                         {renderIcon()}
//                                     </div>
//                                 </div>
//                                 <div className="md:ml-12">
//                                     <div className="mt-8 md:mt-0">
//                                         <ItemComponent item={item} />
//                                     </div>
//                                 </div>
//                                 {/* Mobile inline icon */}
//                                 <div className="md:hidden flex justify-center mb-4">
//                                     <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
//                                         {renderIcon()}
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     } else if (mode === 'right') {
//                         // In right mode, always display content to the left.
//                         return (
//                             <div key={item.id} className="relative md:flex md:items-center">
//                                 {/* Icon placed at the right */}
//                                 <div className="hidden md:block absolute top-0 right-4 transform translate-x-1/2">
//                                     <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
//                                         {renderIcon()}
//                                     </div>
//                                 </div>
//                                 <div className="md:mr-12">
//                                     <div className="mt-8 md:mt-0">
//                                         <ItemComponent item={item} />
//                                     </div>
//                                 </div>
//                                 {/* Mobile inline icon */}
//                                 <div className="md:hidden flex justify-center mb-4">
//                                     <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
//                                         {renderIcon()}
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     }
//                     return null;
//                 })}
//             </div>
//         </div>
//     );
// };
