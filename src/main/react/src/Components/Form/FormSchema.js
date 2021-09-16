import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateForm from "./CreateForm";
import LoadingButton from "../Utils/LoadingButton";
import { useParams } from "react-router";
import ErrorPage from "../Utils/ErrorPage";

export default function FormSchema() {
  const { formId } = useParams();
  console.log(formId);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [initialValues, setInitialValues] = useState({
    title: "Untitled Form",
    about: "",
    questions: [],
  });

  const url = `/form/${formId}/edit`;

  useEffect(() => {
    const fetchData = async () => {
      let result = await axios
        .get(url)
        .then((data) => {
          setError(null);
          return data;
        })
        .catch((error) => {
          console.log(error.response);
          setError(error.response.status);
          return error.response;
        });

      if (result.status === 200) {
        setInitialValues({
          title: result.data.title,
          about: result.data.about,
          questions: Object.values(result.data.questions),
        });
      }
      setLoading(false);
    };
    fetchData();
  }, [url, formId]);

  return (
    <>
      {Loading ? (
        <LoadingButton />
      ) : (
        <>
          {error ? (
            <ErrorPage error={error} />
          ) : (
            <CreateForm initialValues={initialValues} formId={formId} />
          )}
        </>
      )}
    </>
  );
}
