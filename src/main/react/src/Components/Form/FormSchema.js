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
  formId = "612b68d07c94642b12189696";

  // ! handle invalid formId
  useEffect(() => {
    const url = `http://localhost:8080/form/${formId}`;
    const fetchData = async () => {
      const result = await axios.get(url);
      setInitialValues({
        title: result.data.title,
        about: result.data.about,
        questions: Object.values(result.data.questions).sort(),
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
        <div>
          <CreateForm initialValues={initialValues} />
        </div>
      )}
    </div>
  );
}
