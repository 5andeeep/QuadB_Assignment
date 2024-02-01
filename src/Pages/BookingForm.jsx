import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookingForm = ({ movies }) => {
  const { id } = useParams();
  const show = movies.find((m) => m.show.id === parseInt(id));

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleUserData = () => {
    localStorage.setItem(
      "userInfo",
      JSON.stringify({ username: username, email: email })
    );
    navigate("/");
  };

  return (
    <div className="book-show-wrapper">
      <p>
        <b>Show Name: </b>
        {show.show.name}
      </p>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="emai"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleUserData}>Confirm</button>
      </form>
    </div>
  );
};

export default BookingForm;
