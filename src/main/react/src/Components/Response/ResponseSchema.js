import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingButton from "../Utils/LoadingButton";
import SubmitResponse from "./SubmitResponse";
import ErrorPage from "../Utils/ErrorPage";

export default function ResponseSchema() {
  const { formId } = useParams();

  const [APIData, setAPIData] = useState({ questions: {} });
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const url = `form/${formId}/view`;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url)
        .then((result) => {
          setError("");
          setAPIData(result.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.response.status);
          setLoading(false);
        });
    };

    fetchData();
  }, [setAPIData, url]);

  return (
    <>
      {Loading ? (
        <LoadingButton />
      ) : (
        <>
          {error ? (
            <ErrorPage error={error} />
          ) : (
            <SubmitResponse formId={formId} APIData={APIData} />
          )}
        </>
      )}
    </>
  );
}
