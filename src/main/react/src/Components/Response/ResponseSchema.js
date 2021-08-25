import axios from "axios";
import React, { useState, useEffect } from "react";

export default function ResponseSchema({ formId }) {
  const [ResponseData, setResponseData] = useState({
    questions: [],
    response: [[]],
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/res/${formId}`);
      setResponseData(result.data);
    };
    fetchData();
  }, [setResponseData, formId]);

  return (
    <div>
      <pre>{JSON.stringify(ResponseData, null, 2)}</pre>
    </div>
  );
}
