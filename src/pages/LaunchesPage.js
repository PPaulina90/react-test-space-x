import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { baseUrl } from "../api/baseUrl";
import Loader from "../components/Loader";
import Launch from "../components/Launch";

const LaunchesPage = () => {
  const { loading, data } = useFetch(`${baseUrl}/launches`);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="launches">
      <h1 className="title">Space X Launches Page</h1>
      <section className="container">
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
