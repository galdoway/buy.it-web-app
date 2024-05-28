import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import { GetSingleProductResponse } from "./types";
import ProductDetailsSkeleton from "./components/product-details-skeleton";
import { useState } from "react";
import { toast } from "sonner";

export default function ProductDetailsPage() {
  const location = useLocation();

  const [quantity, setQuantity] = useState(1);

  const { isLoading, data } = useQuery<GetSingleProductResponse>({
    queryKey: [`SINGLE_PRODUCT_${location.pathname}`],
    queryFn: async () => {
      const resp = await fetch(`https://dummyjson.com${location.pathname}`);
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      return resp.json();
    },
  });

  if (isLoading) return <ProductDetailsSkeleton />;

  return (
    <>
      {/* Product Details Section: Images With Description */}
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
            {/* Images */}
            <div>
              <img src={data?.images[0]} alt="Product Image" />
              <div className="mt-2 grid grid-cols-4 gap-2"></div>
            </div>
            {/* END Images */}

            {/* Product Info */}
            <div>
              <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    {data?.category}
                  </div>
                  <Link
                    to="#"
                    className="block font-semibold hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    {data?.title}
                  </Link>
                </div>
                <div className="text-left text-orange-500 sm:text-right">
                  {Array.from({ length: data?.rating || 0 }).map((_, key) => (
                    <svg
                      key={key}
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
                  ))}
                </div>
              </div>
              <div className="prose prose-indigo mb-4 dark:prose-invert">
                {data?.description}
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-600 dark:text-gray-400">
                    ${data?.price}
                  </div>
                  <div className="inline-flex items-center">
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity - 1)}
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
                    <span className="px-2.5 text-sm">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
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
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    disabled={true}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700 sm:flex-none"
                  >
                    <svg
                      className="hi-mini hi-heart inline-block size-5 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                    </svg>
                    <span>Favorite</span>
                  </button>
                  <button
                    onClick={() => toast.success("Product Added to Cart")}
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700 sm:grow"
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
            {/* END Product Info */}
          </div>
        </div>
      </div>
      {/* END Product Details Section: Images With Description */}
    </>
  );
}
