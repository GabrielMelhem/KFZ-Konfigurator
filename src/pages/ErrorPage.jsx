import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mt-20 text-3xl mb-4">...ups..nothing to see here</h3>

      <Link to="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">go back to home</Link>
    </div>
  );
}

export default ErrorPage;