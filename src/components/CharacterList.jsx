import { useEffect, useState } from "react";
import Character from "./Character";

function CharacterList() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacter(data.results);
    }

    fetchData();
  }, [page]);

  function NavPage(props) {
    return (
      <header className="d-flex justify-content-between align-items-center">
        {props.page === 1 ? (
          <p></p>
        ) : (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => props.setPage(props.page - 1)}
          >
            Atras
          </button>
        )}

        <h3>Pagina - {props.page}</h3>

        <button
          className="btn btn-primary btn-sm"
          onClick={() => props.setPage(props.page + 1)}
        >
          Siguiente
        </button>
      </header>
    );
  }
  return (
    <div className="container">
      <div className="p-4">
        <NavPage page={page} setPage={setPage} />
      </div>

      {loading ? (
        <h1>Cargando....</h1>
      ) : (
        <div className="row text-center rounded-lg">
          {character.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}

      <div className="p-5">
        <NavPage page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default CharacterList;
