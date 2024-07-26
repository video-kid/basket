import { useRouteError } from 'react-router-dom';

type ReactRouterError = {
  data: string;
  internal: boolean;
  status: number;
  statusText: string;
};

const ErrorPage = () => {
  const error = useRouteError() as ReactRouterError;

  console.error(error.data);

  return (
    <div>
      <h1>Oh no!</h1>
      <h2>
        {error.status} {error.statusText}
      </h2>
    </div>
  );
};

export default ErrorPage;
