import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  });
  return (
    <div>
      {loading ? (
        <h1>Loading . . .</h1>
      ) : (
        movies.map((el) => (
          <Movie
            key={el.id}
            id={el.id}
            coverImage={el.medium_cover_image}
            title={el.title}
            summary={el.summary}
            genres={el.genres}
          />
        ))
      )}
    </div>
  );
}

export default Home;
