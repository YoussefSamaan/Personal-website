import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumePDF } from "./ResumePDF";
import { Download } from "lucide-react";
import { ResumeJson } from "../../types";

interface ResumeExportControlsProps {
    resumeJson: ResumeJson;
    downloadJson: () => void;
}

export function ResumeExportControls({ resumeJson, downloadJson }: ResumeExportControlsProps) {
    const isItemSelected = () => {
        for (const key in resumeJson) {
            if (resumeJson[key].length > 0) {
                return true;
            }
        }
        return false;
    }

    return (
        <div>
            {isItemSelected() && (
                <div className="flex gap-2">
                    <button
                        onClick={downloadJson}
                        className="inline-flex items-center px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 transition-colors"
                    >
                        Download JSON
                    </button>
                    <PDFDownloadLink
                        document={<ResumePDF resumeJson={resumeJson} />}
                        fileName="Youssef_Samaan_Resume.pdf"
                        className="inline-flex items-center px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 transition-colors"
                    >
                        <Download className="w-4 h-4 mr-2" />
                        Export PDF
                    </PDFDownloadLink>
                </div>
            )}
        </div>
    );
}
