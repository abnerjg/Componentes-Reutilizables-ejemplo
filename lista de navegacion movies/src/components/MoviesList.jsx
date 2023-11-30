import { MoviesCard } from "./MoviesCard"

export const MoviesList = (props) => {
    const { list } = props;

    return (<ul>
        {list.map((movie) =>(
            <MoviesCard name={movie.name} duracion={movie.duracion} descripcion={movie.descripcion}/>
            ))}
    </ul>
    );
};
