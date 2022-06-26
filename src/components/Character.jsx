function Character({character}) {
  return (
    <div className="text-center pt-5">
      <h2>{character.name}</h2>
      <img className="shadow mt-5 rounded" src={character.image} alt={character.name} />
      <p className="pt-3 font-bold">{character.origin.name}</p>
    </div>
  );
}

export default Character;
