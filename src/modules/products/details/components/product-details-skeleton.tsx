const ProductDetailsSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          {/* Skeleton for Images */}
          <div className="animate-pulse">
            <div className="bg-gray-300 h-96 w-full rounded-lg"></div>
            <div className="mt-2 grid grid-cols-4 gap-2">
              <div className="bg-gray-300 h-20 w-20 rounded-lg"></div>
              <div className="bg-gray-300 h-20 w-20 rounded-lg"></div>
              <div className="bg-gray-300 h-20 w-20 rounded-lg"></div>
              <div className="bg-gray-300 h-20 w-20 rounded-lg"></div>
            </div>
          </div>

          {/* Skeleton for Product Info */}
          <div className="animate-pulse">
            <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div>
                <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-48 mb-4"></div>
              </div>
              <div className="flex items-center justify-end">
                <div className="h-6 bg-gray-300 rounded w-24"></div>
              </div>
            </div>
            <div className="h-20 bg-gray-300 rounded mb-4"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 rounded-lg bg-gray-300 p-3">
                <div className="h-6 w-6 rounded-full bg-gray-400"></div>
                <div className="h-6 w-6 rounded-full bg-pink-400"></div>
                <div className="h-6 w-6 rounded-full bg-emerald-400"></div>
                <div className="h-6 w-6 rounded-full bg-rose-400"></div>
                <div className="h-6 w-6 rounded-full bg-sky-400"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="h-6 bg-gray-300 rounded w-16"></div>
                <div className="inline-flex items-center">
                  <div className="h-8 w-8 rounded-lg bg-gray-300"></div>
                  <div className="h-8 w-8 rounded-lg bg-gray-300 mx-2"></div>
                  <div className="h-8 w-8 rounded-lg bg-gray-300"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <div className="h-10 bg-gray-300 rounded-lg w-32"></div>
                <div className="h-10 bg-gray-300 rounded-lg w-32 sm:grow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
