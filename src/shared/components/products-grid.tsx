export default function ProductsGrid() {
  return (
    <>
      {/* Product List Section: Products Card Grid */}
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          {/* Filters */}
          <div className="mb-5 flex flex-row items-center justify-between gap-2">
            <form className="space-x-1">
              <div className="inline-block w-16">
                <select
                  id="number"
                  name="number"
                  className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-blue-500"
                >
                  <option selected>6</option>
                  <option>12</option>
                  <option>18</option>
                  <option>24</option>
                  <option>All</option>
                </select>
              </div>
              <span className="text-sm font-medium">Per Page</span>
            </form>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-semibold leading-5 text-gray-400 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-500 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
              >
                <svg
                  className="hi-mini hi-queue-list inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2 4.5A2.5 2.5 0 014.5 2h11a2.5 2.5 0 010 5h-11A2.5 2.5 0 012 4.5zM2.75 9.083a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75zM2.75 12.663a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75zM2.75 16.25a.75.75 0 000 1.5h14.5a.75.75 0 100-1.5H2.75z" />
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-semibold leading-5 text-gray-400 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-500 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
              >
                <svg
                  className="hi-mini hi-squares-2x2 inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* END Filters */}

          {/* Products */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
              <div className="grow space-y-4 p-5">
                <a
                  href="#"
                  className="block font-semibold hover:text-gray-500 dark:hover:text-gray-300"
                >
                  Amazing Smart Watch
                </a>
                <div className="-mx-5">
                  <img
                    src="https://cdn.tailkit.com/media/placeholders/photo-2cFZ_FB08UM-600x600.jpg"
                    alt="Product Image"
                  />
                  <div className="flex items-center justify-center gap-2 border-b border-gray-200/75 p-3 dark:border-gray-700/50 dark:bg-gray-800/50">
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-gray-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-gray-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-pink-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-pink-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-emerald-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-emerald-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-rose-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-rose-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-sky-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-sky-400/50 active:opacity-100"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-600 dark:text-gray-400">
                    $280
                  </div>
                  <div className="inline-flex items-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                    >
                      <svg
                        className="hi-mini hi-minus-small -mx-1 inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                      </svg>
                    </button>
                    <span className="px-2.5 text-sm">1</span>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                    >
                      <svg
                        className="hi-mini hi-plus-small -mx-1 inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                  >
                    <svg
                      className="hi-mini hi-shopping-bag inline-block size-5 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
              <div className="grow space-y-4 p-5">
                <a
                  href="#"
                  className="block font-semibold hover:text-gray-500 dark:hover:text-gray-300"
                >
                  Modern Shoes
                </a>
                <div className="-mx-5">
                  <img
                    src="https://cdn.tailkit.com/media/placeholders/photo-KStSiM1UvPw-600x600.jpg"
                    alt="Product Image"
                  />
                  <div className="flex items-center justify-center gap-2 border-b border-gray-200/75 p-3 dark:border-gray-700/50 dark:bg-gray-800/50">
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-gray-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-gray-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-pink-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-pink-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-sky-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-sky-400/50 active:opacity-100"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-600 dark:text-gray-400">
                    <del>$120</del>
                    <span className="text-rose-500 dark:text-rose-400">
                      $65
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                    >
                      <svg
                        className="hi-mini hi-minus-small -mx-1 inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                      </svg>
                    </button>
                    <span className="px-2.5 text-sm">1</span>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                    >
                      <svg
                        className="hi-mini hi-plus-small -mx-1 inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                  >
                    <svg
                      className="hi-mini hi-shopping-bag inline-block size-5 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
              <div className="grow space-y-4 p-5">
                <a
                  href="#"
                  className="block font-semibold hover:text-gray-500 dark:hover:text-gray-300"
                >
                  Cool Sunglasses
                </a>
                <div className="-mx-5">
                  <img
                    src="https://cdn.tailkit.com/media/placeholders/photo-K62u25Jk6vo-600x600.jpg"
                    alt="Product Image"
                  />
                  <div className="flex items-center justify-center gap-2 border-b border-gray-200/75 p-3 dark:border-gray-700/50 dark:bg-gray-800/50">
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-gray-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-gray-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-sky-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-sky-400/50 active:opacity-100"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-600 dark:text-gray-400">
                    $92
                  </div>
                  <div className="inline-flex items-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                    >
                      <svg
                        className="hi-mini hi-minus-small -mx-1 inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                      </svg>
                    </button>
                    <span className="px-2.5 text-sm">1</span>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                    >
                      <svg
                        className="hi-mini hi-plus-small -mx-1 inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                  >
                    <svg
                      className="hi-mini hi-shopping-bag inline-block size-5 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
              <div className="grow space-y-4 p-5">
                <a
                  href="#"
                  className="block font-semibold hover:text-gray-500 dark:hover:text-gray-300"
                >
                  Sneakers
                </a>
                <div className="-mx-5">
                  <img
                    src="https://cdn.tailkit.com/media/placeholders/photo-LxVxPA1LOVM-600x600.jpg"
                    alt="Product Image"
                  />
                  <div className="flex items-center justify-center gap-2 border-b border-gray-200/75 p-3 dark:border-gray-700/50 dark:bg-gray-800/50">
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-gray-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-gray-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-emerald-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-emerald-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-rose-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-rose-400/50 active:opacity-100"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-600 dark:text-gray-400">
                    <del>$57</del>
                    <span className="text-rose-500 dark:text-rose-400">
                      $43
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                    >
                      <svg
                        className="hi-mini hi-minus-small -mx-1 inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                      </svg>
                    </button>
                    <span className="px-2.5 text-sm">1</span>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                    >
                      <svg
                        className="hi-mini hi-plus-small -mx-1 inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                  >
                    <svg
                      className="hi-mini hi-shopping-bag inline-block size-5 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
              <div className="grow space-y-4 p-5">
                <a
                  href="#"
                  className="block font-semibold hover:text-gray-500 dark:hover:text-gray-300"
                >
                  Bluetooth headphones
                </a>
                <div className="-mx-5">
                  <img
                    src="https://cdn.tailkit.com/media/placeholders/photo-NuOGFo4PudE-600x600.jpg"
                    alt="Product Image"
                  />
                  <div className="flex items-center justify-center gap-2 border-b border-gray-200/75 p-3 dark:border-gray-700/50 dark:bg-gray-800/50">
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-gray-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-gray-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-pink-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-pink-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-emerald-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-emerald-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-rose-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-rose-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-sky-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-sky-400/50 active:opacity-100"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-600 dark:text-gray-400">
                    $160
                  </div>
                  <div className="inline-flex items-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                    >
                      <svg
                        className="hi-mini hi-minus-small -mx-1 inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                      </svg>
                    </button>
                    <span className="px-2.5 text-sm">1</span>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                    >
                      <svg
                        className="hi-mini hi-plus-small -mx-1 inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                  >
                    <svg
                      className="hi-mini hi-shopping-bag inline-block size-5 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
              <div className="grow space-y-4 p-5">
                <a
                  href="#"
                  className="block font-semibold hover:text-gray-500 dark:hover:text-gray-300"
                >
                  Retro Camera
                </a>
                <div className="-mx-5">
                  <img
                    src="https://cdn.tailkit.com/media/placeholders/photo-KsLPTsYaqIQ-600x600.jpg"
                    alt="Product Image"
                  />
                  <div className="flex items-center justify-center gap-2 border-b border-gray-200/75 p-3 dark:border-gray-700/50 dark:bg-gray-800/50">
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-pink-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-pink-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-rose-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-rose-400/50 active:opacity-100"
                    />
                    <button
                      type="button"
                      className="inline-block size-5 rounded-lg bg-sky-400 hover:opacity-75 focus:outline-none focus:ring focus:ring-sky-400/50 active:opacity-100"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-600 dark:text-gray-400">
                    $153
                  </div>
                  <div className="inline-flex items-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                    >
                      <svg
                        className="hi-mini hi-minus-small -mx-1 inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                      </svg>
                    </button>
                    <span className="px-2.5 text-sm">1</span>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                    >
                      <svg
                        className="hi-mini hi-plus-small -mx-1 inline-block size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                  >
                    <svg
                      className="hi-mini hi-shopping-bag inline-block size-5 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* END Products */}
          <hr className="my-10 dark:border-gray-700/50" />
          {/* Pagination: Alternate */}
          <div className="text-center dark:text-gray-100">
            {/* Visible on mobile */}
            <nav className="flex sm:hidden">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-4 py-2 font-semibold leading-6 text-gray-700 hover:bg-blue-100 hover:text-blue-800 focus:ring focus:ring-blue-300/25 active:bg-transparent dark:bg-transparent dark:text-gray-300 dark:hover:bg-blue-700 dark:hover:text-blue-100 dark:focus:ring-blue-600/40 dark:active:bg-transparent"
              >
                <svg
                  className="hi-mini hi-chevron-left -mx-1.5 inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div className="flex grow items-center justify-center px-2 sm:px-4">
                <span>
                  Page <span className="font-semibold">2</span> of
                  <span className="font-semibold">20</span>
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-4 py-2 font-semibold leading-6 text-gray-700 hover:bg-blue-100 hover:text-blue-800 focus:ring focus:ring-blue-300/25 active:bg-transparent dark:bg-transparent dark:text-gray-300 dark:hover:bg-blue-700 dark:hover:text-blue-100 dark:focus:ring-blue-600/40 dark:active:bg-transparent"
              >
                <svg
                  className="hi-mini hi-chevron-right -mx-1.5 inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
            {/* END Visible on mobile */}

            {/* Visible on desktop */}
            <nav className="hidden justify-between gap-1 sm:flex">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-4 py-2 font-semibold leading-6 text-gray-700 hover:bg-blue-100 hover:text-blue-800 focus:ring focus:ring-blue-300/25 active:bg-transparent dark:bg-transparent dark:text-gray-300 dark:hover:bg-blue-700 dark:hover:text-blue-100 dark:focus:ring-blue-600/40 dark:active:bg-transparent"
              >
                <svg
                  className="hi-mini hi-chevron-left -mx-1.5 inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div className="inline-flex gap-1">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-4 py-2 font-semibold leading-6 text-gray-700 hover:bg-blue-100 hover:text-blue-800 focus:ring focus:ring-blue-300/25 active:bg-transparent dark:bg-transparent dark:text-gray-300 dark:hover:bg-blue-700 dark:hover:text-blue-100 dark:focus:ring-blue-600/40 dark:active:bg-transparent"
                >
                  1
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-blue-100 px-4 py-2 font-semibold leading-6 text-blue-800 focus:ring focus:ring-blue-300/25 dark:bg-blue-700 dark:text-blue-100 dark:focus:ring-blue-600/40"
                >
                  2
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-4 py-2 font-semibold leading-6 text-gray-700 hover:bg-blue-100 hover:text-blue-800 focus:ring focus:ring-blue-300/25 active:bg-transparent dark:bg-transparent dark:text-gray-300 dark:hover:bg-blue-700 dark:hover:text-blue-100 dark:focus:ring-blue-600/40 dark:active:bg-transparent"
                >
                  3
                </a>
                <div className="flex items-center justify-center px-4 text-gray-700 dark:text-gray-300">
                  ...
                </div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-4 py-2 font-semibold leading-6 text-gray-700 hover:bg-blue-100 hover:text-blue-800 focus:ring focus:ring-blue-300/25 active:bg-transparent dark:bg-transparent dark:text-gray-300 dark:hover:bg-blue-700 dark:hover:text-blue-100 dark:focus:ring-blue-600/40 dark:active:bg-transparent"
                >
                  19
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-4 py-2 font-semibold leading-6 text-gray-700 hover:bg-blue-100 hover:text-blue-800 focus:ring focus:ring-blue-300/25 active:bg-transparent dark:bg-transparent dark:text-gray-300 dark:hover:bg-blue-700 dark:hover:text-blue-100 dark:focus:ring-blue-600/40 dark:active:bg-transparent"
                >
                  20
                </a>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-4 py-2 font-semibold leading-6 text-gray-700 hover:bg-blue-100 hover:text-blue-800 focus:ring focus:ring-blue-300/25 active:bg-transparent dark:bg-transparent dark:text-gray-300 dark:hover:bg-blue-700 dark:hover:text-blue-100 dark:focus:ring-blue-600/40 dark:active:bg-transparent"
              >
                <svg
                  className="hi-mini hi-chevron-right -mx-1.5 inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
            {/* END Visible on desktop */}
          </div>
          {/* END Pagination: Alternate */}
        </div>
      </div>
      {/* END Product List Section: Products Card Grid */}
    </>
  );
}
