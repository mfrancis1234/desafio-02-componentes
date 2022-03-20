import { Button } from "./Button";

interface SideBarProps {
  genres: IGenres[];
  setSelectedGenreId: (id: number) => void;
  selectedGenreId: number;
}

interface IGenres {
  id: number;
  title: string;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
}

export function SideBar(props: SideBarProps) {
  // Complete aqui
  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }

  return (
    <>
      <span>
        Watch<p>Me</p>
      </span>
      <div className='buttons-container'>
        {props.genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </>
  );
}
