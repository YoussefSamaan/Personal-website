import { Star } from 'lucide-react';

interface Movie {
    id: number;
    title: string;
    year: string;
    rating: number;
    genre: string[];
    image: string;
    description: string;
}

const movies: Movie[] = [
    {
        id: 1,
        title: "Inception",
        year: "2010",
        rating: 4.8,
        genre: ["Sci-Fi", "Action", "Thriller"],
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1000",
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        year: "1994",
        rating: 4.9,
        genre: ["Drama"],
        image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&q=80&w=1000",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        id: 3,
        title: "Pulp Fiction",
        year: "1994",
        rating: 4.7,
        genre: ["Crime", "Drama"],
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    }
];

export function Movies() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies.map((movie) => (
                    <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-slate-800">{movie.title}</h3>
                                <div className="flex items-center">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="ml-1 text-sm text-slate-600">{movie.rating}</span>
                                </div>
                            </div>
                            <div className="text-sm text-slate-500 mb-2">{movie.year}</div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {movie.genre.map((g, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs"
                                    >
                    {g}
                  </span>
                                ))}
                            </div>
                            <p className="text-slate-600 text-sm">{movie.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}