import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { ResumeList } from "./ResumeList";
import { ResumeBuilder } from "./ResumeBuilder";
import { ResumeExportControls } from "./ResumeExportControls";
import { TimelineItem, ResumeJson } from "../../types";
import { useState } from "react";

interface ResumeSectionProps {
  timelineItems: TimelineItem[];
}

export function ResumeSection({ timelineItems }: ResumeSectionProps) {
  const { section } = useParams();

  const [selectedResumeItems, setSelectedResumeItems] = useState<ResumeJson>({});

  const handleSelectionChange = (newSelection: ResumeJson) => {
    setSelectedResumeItems(newSelection);
  };

  const downloadJson = () => {
    const dataStr = JSON.stringify(selectedResumeItems, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Youssef_Samaan_Resume.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
      <div className="max-w-4xl mx-auto py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-slate-200">
            <div className="flex">
              <Link
                  to="/resume/saved"
                  className={`px-6 py-4 text-sm font-medium ${
                      section === "saved"
                          ? "border-b-2 border-slate-700 text-slate-700"
                          : "text-slate-500 hover:text-slate-700"
                  }`}
              >
                Saved Resumes
              </Link>
              <Link
                  to="/resume/create"
                  className={`px-6 py-4 text-sm font-medium flex items-center ${
                      section === "create"
                          ? "border-b-2 border-slate-700 text-slate-700"
                          : "text-slate-500 hover:text-slate-700"
                  }`}
              >
                <Plus className="w-4 h-4 mr-2" />
                Create New
              </Link>
              <div className="p-2 flex flex-grow justify-end">
                <ResumeExportControls
                    resumeJson={selectedResumeItems}
                    downloadJson={downloadJson}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {section === "create" ? (
                  <ResumeBuilder
                      timelineItems={timelineItems}
                      onSelectionChange={handleSelectionChange}
                      selectedResumeItems={selectedResumeItems}
                  />
            ) : (
                <ResumeList />
            )}
          </div>
        </div>
      </div>
  );
}
