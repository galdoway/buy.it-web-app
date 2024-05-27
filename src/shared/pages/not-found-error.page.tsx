import { Link } from "react-router-dom";

export default function NotFoundErrorPage() {
  return (
    <>
      {/* Pages: Errors: 400 */}

      {/* Page Container */}
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
      >
        {/* Page Content */}
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative flex min-h-dvh items-center overflow-hidden bg-white dark:bg-gray-800">
            {/* Left/Right Background */}
            <div
              className="absolute bottom-0 left-0 top-0 -ml-44 w-48 bg-blue-50 dark:bg-blue-500/10 md:-ml-28 md:skew-x-6"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 right-0 top-0 -mr-44 w-48 bg-blue-50 dark:bg-blue-500/10 md:-mr-28 md:skew-x-6"
              aria-hidden="true"
            />
            {/* END Left/Right Background */}

            {/* Error Content */}
            <div className="container relative mx-auto space-y-16 px-8 py-16 text-center lg:py-32 xl:max-w-7xl">
              <div>
                <div className="mb-5 text-blue-300 dark:text-blue-300/50">
                  <svg
                    className="hi-outline hi-exclamation-circle inline-block size-12"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="text-6xl font-extrabold text-blue-600 dark:text-blue-500 md:text-7xl">
                  400
                </div>
                <div
                  className="mx-auto my-6 h-1.5 w-12 rounded-lg bg-gray-200 dark:bg-gray-700 md:my-10"
                  aria-hidden="true"
                />
                <h1 className="mb-3 text-2xl font-extrabold md:text-3xl">
                  Oops! Your Request is a Bit Off
                </h1>
                <h2 className="mx-auto font-medium text-gray-500 dark:text-gray-400 md:leading-relaxed lg:w-3/5">
                  Looks like our server can't make sense of your request. Please
                  check your URL.
                </h2>
              </div>
              <Link
                to="/"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
              >
                <svg
                  className="hi-mini hi-arrow-left inline-block size-5 opacity-50 transition group-hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Back to Home</span>
              </Link>
            </div>
            {/* END Error Content */}
          </div>
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}

      {/* END Pages: Errors: 400 */}
    </>
  );
}
