import { FileText, Download } from 'lucide-react';
import { resumes } from '../../data/ResumesItems';

export const ResumeList = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Saved Resumes</h2>
            <div className="grid gap-4">
                {resumes.map((resume) => (
                    <div
                        key={resume.id}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center">
                                <FileText className="w-8 h-8 text-slate-600 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800">{resume.name}</h3>
                                    <p className="text-sm text-slate-500 mt-1">{resume.description}</p>
                                    <p className="text-xs text-slate-400 mt-2">Last modified: {resume.lastModified}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button
                                    className="inline-flex items-center px-3 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                                    onClick={() => window.open(resume.link, '_blank')}
                                >
                                    <FileText className="w-4 h-4 mr-2" />
                                    View
                                </button>
                                {/*<button*/}
                                {/*    className="inline-flex items-center px-3 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"*/}
                                {/*    onClick={() => window.open(resume.link, '_blank') }// download the resume*/}
                                {/*>*/}
                                {/*    <Download className="w-4 h-4 mr-2" />*/}
                                {/*    Download*/}
                                {/*</button>*/}

                                <a href={resume.link} download={resume.name}>
                                    <button
                                        className="inline-flex items-center px-3 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};