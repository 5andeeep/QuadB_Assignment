import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails";
import BookingForm from "./Pages/BookingForm";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    console.log(data);
    setData(data);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home movies={data} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={data} />} />
        <Route path="/book/:id" element={<BookingForm movies={data} />} />
      </Routes>
    </div>
  );
}

export default App;
