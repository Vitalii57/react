import useJsonFetch from "../hooks/useJsonFetch";

function ComponentLoading({ suffix }) {
  const [data, loading, error] = useJsonFetch(process.env.REACT_APP_URL, {
    opts: suffix,
  });
  return (
    <div className="сomponent__example">
      <h2 className="component_example_title">Component 'Loading'</h2>
      {`Загрузка данных: ${data.loading}`}
    </div>
  );
}

export default ComponentLoading;