import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { baseUrl } from "../api/baseUrl";
import Launch from "../components/Launch";

const LaunchesPage = () => {
  const { loading, data } = useFetch(`${baseUrl}/launches`);

  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      <h1>Space X Launches Page</h1>
      <section>
        {data.map((launch) => {
          return (
            <Link to={`/launch/${launch.id}`} key={launch.id}>
              <Launch name={launch.name} />
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default LaunchesPage;
