import { MovieCard } from "./MovieCard";

interface ContentProps {
  movies: IMovies[];
  selectedGenre: {
    title: string;
  };
}

interface IMovies {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
export function Content(props: ContentProps) {
  // Complete aqui

  return (
    <>
      <header>
        <span className='category'>
          Categoria:<span> {props.selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className='movies-list'>
          {props.movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </>
  );
}
