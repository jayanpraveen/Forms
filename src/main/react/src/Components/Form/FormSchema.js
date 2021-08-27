import axios from "axios";
import React, { useState, useEffect } from "react";
import CreateForm from "./CreateForm";

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
        <h2>Loading...</h2>
      ) : (
        <div>
          <CreateForm />
        </div>
      )}
    </div>
  );
}
