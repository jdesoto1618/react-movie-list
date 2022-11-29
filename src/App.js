import { useEffect, React } from "react";

const API_KEY = "6b006179";
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return <h1>Hello from App.js</h1>;
};

export default App;
