import {useEffect, useState} from 'react';
import {HobbyListItem} from '../../types.ts';
import {useNavigate, useParams} from "react-router-dom";
import {hobbies} from "../../data/hobbiesData.ts";

export function Hobbies() {
    const [selectedHobby, setSelectedHobby] = useState<HobbyListItem | null>(null);
    const { hobby } = useParams<'hobby'>();
    const navigate = useNavigate();

    // If a hobby is selected, update the URL and render the hobby details
    const handleHobbyClick = (hobby: HobbyListItem) => {
        navigate(`/hobbies/${hobby.title}`);
        setSelectedHobby(hobby);
    };

    // If the URL has a hobby ID, render the hobby details
    useEffect(() => {
        if (hobby) {
            const selectedHobby = hobbies.find((h) => h.title === hobby);
            if (selectedHobby) {
                setSelectedHobby(selectedHobby);
            }
        } else {
            setSelectedHobby(null);
        }
    }, [hobby]);

    return (
        <div>
            {!selectedHobby ? (
                <div className="max-w-6xl mx-auto py-12 px-4">
                    <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Hobbies & Interests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hobbies.map((hobby, index) => (
                        <div
                            key={index}
                            onClick={() => handleHobbyClick(hobby)}
                            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center mb-4">
                                <hobby.icon className="w-8 h-8 text-slate-600 mr-3" />
                                <h3 className="text-xl font-semibold text-slate-800">{hobby.title}</h3>
                            </div>
                            <p className="text-slate-600">{hobby.description}</p>
                        </div>
                    ))}
                </div>
                </div>
            ) : (
                <div>
                     <selectedHobby.component />
                </div>
            )}
        </div>
    );
}