export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 shadow-sm dark:bg-gray-700 sm:flex-row animate-pulse">
      {/* Card Image Skeleton */}
      <div className="h-64 w-full bg-gray-300 sm:h-auto sm:w-1/3" />

      {/* Card Body Skeleton */}
      <div className="grow p-5 sm:w-2/3">
        <div className="mb-2 h-5 w-1/4 rounded bg-gray-400 dark:bg-gray-600" />
        <div className="h-6 w-1/2 rounded bg-gray-400 dark:bg-gray-600" />
        <div className="h-4 w-1/3 rounded bg-gray-400 dark:bg-gray-600 mt-4" />
        <div className="mt-4 flex justify-between">
          <div className="h-6 w-1/4 rounded bg-gray-400 dark:bg-gray-600" />
          <div className="h-10 w-1/4 rounded bg-gray-400 dark:bg-gray-600" />
        </div>
      </div>
    </div>
  );
}
