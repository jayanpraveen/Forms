import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateForm from "./CreateForm";
import LoadingButton from "../Utils/LoadingButton";

export default function FormSchema({ formId }) {
  const [FormData, setFormData] = useState({});
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/form/${formId}`);
      setFormData(result.data);
      setLoading(false);
    };
    fetchData();
  }, [setFormData, formId]);

  return (
    <div>
      {Loading ? (
        <LoadingButton />
      ) : (
        <div>
          <CreateForm />
        </div>
      )}
    </div>
  );
}
