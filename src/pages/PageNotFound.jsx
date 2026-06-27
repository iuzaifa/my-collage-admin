import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          The page you're looking for doesn't exist, has been moved, or the URL
          may be incorrect.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Go Back
          </button>
        </div>

        <div className="mt-12">
          <div className="inline-flex h-40 w-40 items-center justify-center rounded-full bg-blue-100">
            <span className="text-7xl">🚧</span>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Error Code: <span className="font-semibold">404</span>
        </p>
      </div>
    </section>
  );
};