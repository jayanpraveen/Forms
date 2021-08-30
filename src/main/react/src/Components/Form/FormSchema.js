import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateForm from "./CreateForm";
import LoadingButton from "../Utils/LoadingButton";

export default function FormSchema({ formId }) {
  const [Loading, setLoading] = useState(true);
  const [initialValues, setInitialValues] = useState({
    title: "Untitled Form",
    about: "",
    questions: [],
  });
  formId = "612bb595ba652b7464b6eac4";

  // ! handle invalid formId
  useEffect(() => {
    const url = `/form/${formId}`;
    const fetchData = async () => {
      const result = await axios.get(url);
      setInitialValues({
        title: result.data.title,
        about: result.data.about,
        questions: Object.values(result.data.questions),
      });
      setLoading(false);
    };
    fetchData();
  }, [formId]);

  return (
    <div>
      {Loading ? (
        <LoadingButton />
      ) : (
        <>
          <CreateForm initialValues={initialValues} formId={formId} />
        </>
      )}
    </div>
  );
}
