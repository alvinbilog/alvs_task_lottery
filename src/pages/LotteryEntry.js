import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";

const LotteryEntry = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/theatreShows/" + id;
  const { error, isPending, data: show } = useFetch(url);
  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {show && (
        <div>
          <h2>
            {show.lotteryEntries.map(LotteryEntry => (
              <h2>{LotteryEntry.username}</h2>
            ))}
          </h2>
        </div>
      )}
    </div>
  );
};

export default LotteryEntry;
