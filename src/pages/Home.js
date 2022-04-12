import React from "react";
import { useFetch } from "../hook/useFetch";
import Shows from "./Shows";
const Home = () => {
  const { data, isPending, error } = useFetch(
    " http://localhost:3000/theatreShows"
  );
  return (
    <div className="Home">
      {error && <p>{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <Shows showDatas={data} />}
    </div>
  );
};

export default Home;
