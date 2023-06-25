import useJsonFetch from "../hooks/useJsonFetch";
import { useState, useEffect } from "react";

function ComponentData({ suffix }) {
  const [data, loading, error] = useJsonFetch(process.env.REACT_APP_URL, {
    opts: suffix,
  });

  return (
    <div className="сomponent__example">
      <h2 className="component_example_title">Component 'Data'</h2>
      {(data.loading && <p>loading...</p>) || (
        <p>{`Данные загружены: ${data.data.status}`}</p>
      )}
    </div>
  );
}

export default ComponentData;