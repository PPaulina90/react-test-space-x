import React from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../api/baseUrl";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import Details from "../components/Details";

const SingleLaunchPage = () => {
  const { id } = useParams();
  const { loading, data } = useFetch(`${baseUrl}/launches/${id}`);

  if (loading) {
    return <Loader />;
  }
  const { details, upcoming, success, name, links } = data;
  return (
    <div classNamez="launches">
      <h1 className="title">Single Launch Page</h1>
      <Details
        details={details}
        upcoming={upcoming}
        success={success}
        name={name}
        links={links}
      />
    </div>
  );
};

export default SingleLaunchPage;
