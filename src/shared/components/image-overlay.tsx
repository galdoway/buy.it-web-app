type Props = { src: string; title: string; subtitle?: string };

function ImageOverlay({ src, title, subtitle }: Props) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-blue-900 focus-within:ring-4 focus-within:ring-blue-500/50 focus-within:ring-offset-2 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2 dark:ring-offset-gray-900"
      tabIndex={0}
    >
      <img
        src={src}
        alt="Image 1"
        className="w-full h-64 object-cover" // Añade estas clases para controlar el tamaño de la imagen
      />
      {/* Item Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-900/80 opacity-0 transition duration-300 ease-out group-focus-within:opacity-100 group-hover:opacity-100 group-focus:opacity-100">
        <div className="text-center">
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          <h5 className="mb-5 text-sm text-white/80">{subtitle}</h5>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-blue-700 hover:bg-blue-700 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-600 active:bg-blue-600"
          >
            <span>More Info</span>
            <svg
              className="hi-mini hi-arrow-top-right-on-square inline-block size-4 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageOverlay;
