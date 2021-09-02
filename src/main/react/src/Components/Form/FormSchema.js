import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateForm from "./CreateForm";
import LoadingButton from "../Utils/LoadingButton";
import { Result, Button } from "antd";

export default function FormSchema({ formId }) {
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
          setError("");
          return data;
        })
        .catch((error) => {
          setError(error.response.status);
          return error.response.status;
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
  }, [url]);

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
              extra={<Button type="primary">Back Home</Button>}
            />
          ) : (
            <CreateForm initialValues={initialValues} formId={formId} />
          )}
        </>
      )}
    </div>
  );
}
