import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateForm from "./CreateForm";
import LoadingButton from "../Utils/LoadingButton";
import { Result, Button } from "antd";
import { useParams } from "react-router";

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

  const url = `/form/${formId}`;

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
    <div>
      {Loading ? (
        <LoadingButton />
      ) : (
        <>
          {error ? (
            <Result
              status={error}
              title={error}
              subTitle="Sorry, the page you visited does not exist."
              extra={
                <Button type="primary" href="/">
                  Back Home
                </Button>
              }
            />
          ) : (
            <CreateForm initialValues={initialValues} formId={formId} />
          )}
        </>
      )}
    </div>
  );
}
