import useJsonFetch from "../hooks/useJsonFetch";

function ComponentError({ suffix }) {
  const [data, loading, error] = useJsonFetch(process.env.REACT_APP_URL, {
    opts: suffix,
  });
  return (
    <div className="сomponent__example">
      <h2 className="component_example_title">Component 'Error'</h2>
      {(loading && <p>loading...</p>) || `${data.error}`}
    </div>
  );
}

export default ComponentError;