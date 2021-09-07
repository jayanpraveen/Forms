import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingButton from "../Utils/LoadingButton";
import SubmitResponse from "./SubmitResponse";

export default function ResponseSchema() {
  const { formId } = useParams();

  const [APIData, setAPIData] = useState({ questions: {} });
  const [Loading, setLoading] = useState(true);

  const url = `form/${formId}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setAPIData(result.data);
      setLoading(false);
    };
    fetchData();
  }, [setAPIData, url]);

  return (
    <>
      {Loading ? (
        <LoadingButton />
      ) : (
        <SubmitResponse formId={formId} APIData={APIData} />
      )}
    </>
  );
}
