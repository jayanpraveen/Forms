import axios from "axios";
import React, { useState, useEffect } from "react";

export default function FormSchema({ formId }) {
  const [FormData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/form/${formId}`);
      setFormData(result.data);
    };
    fetchData();
  }, [setFormData, formId]);

  return (
    <div>
      <pre>{JSON.stringify(FormData, null, 2)}</pre>
    </div>
  );
}
