export default function ProductCard() {
  return (
    <>
      {/* Cards: Product */}
      <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100 sm:flex-row">
        {/* Card Image */}
        <div
          className="h-64 bg-cover bg-center sm:h-auto sm:w-1/3"
          style={{
            backgroundImage:
              'url("https://cdn.tailkit.com/media/placeholders/photo-aOC7TSLb1o8-450x300.jpg")',
          }}
        />
        {/* Card Body */}
        <div className="grow p-5 sm:w-2/3">
          <p className="mb-2 text-orange-400">
            <svg
              className="hi-mini hi-star inline-block size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="hi-mini hi-star inline-block size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="hi-mini hi-star inline-block size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="hi-mini hi-star inline-block size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="hi-mini hi-star inline-block size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          </p>
          <h3 className="mb-1 text-xl font-semibold">Laptop Pro 15.6"</h3>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Intel CPU 3.8GHz, 4070 GTX, 32GB, SSD 1TB
          </p>
          <div className="mt-4 md:flex md:items-center md:justify-between">
            <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              <span className="align-top text-sm">$</span>1499
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center mt-2 md:mt-0 gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
            >
              <svg
                className="hi-mini hi-shopping-bag inline-block size-4 opacity-50"
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
              <span>Add to cart</span>
            </button>
          </div>
        </div>
        {/* END Card Body */}
      </div>
      {/* END Cards: Product */}
    </>
  );
}
