import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold mb-4">
          Oops Something went wrong...
        </h1>
        <p>
          {err.status}: {err.statusText}
        </p>
        <p>{err.data}</p>
      </div>
    </>
  );
};

export default ErrorPage;
