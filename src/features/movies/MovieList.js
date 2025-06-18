import { fetchPopularMovies } from "../../api/api";

export default () => {
  const handleClick = async () => {
    try {
      const movies = await fetchPopularMovies();
      console.log(movies);
    } catch (error) {
      console.error("Błąd pobierania filmów:", error);
    }
  };

  return (
    <>
      <h1>Movie Page</h1>
      <button onClick={handleClick}>Pobierz filmy</button>
    </>
  );
};
