export const MoviesCard = (props)=>{

    const {name} = props;
    const {duracion} = props;
    const {descripcion} = props;

    return (
        <li>
            <article>
                <h3>{name}</h3>
                <h4>{duracion}</h4>
                <p>{descripcion}</p>
                <button>Check times</button>
            </article>
        </li>
    );
};