import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { TimelineItem } from '../../types';
import { ResumeList } from './ResumeList';
import { ResumeBuilder } from './ResumeBuilder';

interface ResumeBuilderProps {
  timelineItems: TimelineItem[];
}

export function ResumeSection({ timelineItems }: ResumeBuilderProps) {
  const { section } = useParams();

  return (
      <div className="max-w-4xl mx-auto py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-slate-200">
            <div className="flex">
              <Link to="/resume/saved" className={`px-6 py-4 text-sm font-medium ${
                  section === 'saved'
                      ? 'border-b-2 border-slate-700 text-slate-700'
                      : 'text-slate-500 hover:text-slate-700'
              }`}>
                Saved Resumes
              </Link>
              <Link to="/resume/create" className={`px-6 py-4 text-sm font-medium flex items-center ${
                  section === 'create'
                      ? 'border-b-2 border-slate-700 text-slate-700'
                      : 'text-slate-500 hover:text-slate-700'
              }`}>
                <Plus className="w-4 h-4 mr-2" />
                Create New
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {section === 'create' ? (
                <ResumeBuilder timelineItems={timelineItems} />
            ) : (
                <ResumeList />
            )}
          </div>
        </div>
      </div>
  );
}