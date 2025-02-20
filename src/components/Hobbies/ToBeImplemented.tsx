import { useNavigate } from 'react-router-dom';

export function ToBeImplemented() {
    const navigate = useNavigate();

    const handleBackToHobbies = () => {
        navigate('/hobbies');
    };

    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    To be implemented later
                </h2>
                <p className="text-slate-600 mb-6">
                    This feature is under construction. Please check back later.
                </p>
                <button
                    onClick={handleBackToHobbies}
                    className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-700 transition"
                >
                    Back to Hobbies List
                </button>
            </div>
        </div>
    );
}
