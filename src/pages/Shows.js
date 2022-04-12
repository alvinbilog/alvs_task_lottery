import React, { useState } from "react";
import { useFetch } from "../hook/useFetch";
import { Link } from "react-router-dom";
import "../scss/Shows.css";
const Shows = ({ showDatas }) => {
  const { postData, data, error } = useFetch(
    " http://localhost:3000/theatreShows",
    "POST"
  );
  const [showId, setShowId] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");
  const [username, setUsername] = useState("");
  // const [lotteryEntry, setLotteryEntry] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(showId);
    console.log(ticketNumber);
    console.log(username);
    postData({
      lotteryEntries: {
        username: username,
        ticketNumber: ticketNumber,
      },
    });
  };

  return (
    <div className="Shows">
      {showDatas.map(show => (
        <div key={show.id} className="shows-container">
          <form onSubmit={handleSubmit}>
            <h1>{show.name}</h1>
            <label>
              <span>Performance Date:</span>
              <h4> {show.performanceDate} </h4>
            </label>
            <label>
              <span>Time:</span>
              <h4> {show.performanceTime}</h4>
            </label>
            <label>
              <span> Lottery Ends:</span>
              <h4> {show.lotteryEnds}</h4>
            </label>

            <label>
              <span>tickets</span>
              <input
                type="number"
                max="2"
                min="1"
                onChange={e => setTicketNumber(e.target.value)}
                required
              />
            </label>
            <label>
              <span>username: </span>
              <input type="text" onChange={e => setUsername(e.target.value)} />
            </label>

            <button onClick={() => setShowId(show.id)}>Enter Lottery</button>
          </form>
          <Link to={`/theatreShows/${show.id}`} className="links">
            <h4>Check status</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Shows;
