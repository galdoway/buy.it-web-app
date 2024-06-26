import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { GetProductsResponse } from "~/modules/home/types";
import Button from "~/shared/components/button";
import ProductCard from "~/shared/components/product-card";
import ProductCardSkeleton from "~/shared/components/product-card-skeleton";

export default function AllProductsPage() {
  const [filterCriteria, setFilterCriteria] = useState({
    sortBy: "title",
    order: "asc",
    limit: 26,
  });

  const { isLoading, data, refetch } = useQuery<GetProductsResponse>({
    queryKey: ["SHOW_ALL_PRODUCTS"],
    queryFn: async () => {
      const resp = await fetch(
        `https://dummyjson.com/products?limit=${filterCriteria.limit}&sortBy=${filterCriteria.sortBy}&order=${filterCriteria.order}`
      );
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      return resp.json();
    },
  });
  return (
    <div>
      <h6 className="font-display text-xl mb-4 lg:mb-0 font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-[5rem]">
        All Products
      </h6>
      <div className="my-4 grid gap-3 grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="select" className="font-medium">
            Sort By
          </label>
          <select
            value={filterCriteria.sortBy}
            onChange={(e) =>
              setFilterCriteria({
                ...filterCriteria,
                sortBy: e.currentTarget.value,
              })
            }
            id="select"
            name="select"
            className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-blue-500"
          >
            <option value={"title"}>Title</option>
            <option value={"price"}>Price</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="select" className="font-medium">
            Order By
          </label>
          <select
            value={filterCriteria.order}
            onChange={(e) =>
              setFilterCriteria({
                ...filterCriteria,
                order: e.currentTarget.value,
              })
            }
            id="select"
            name="select"
            className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-blue-500"
          >
            <option value={"asc"}>Asc</option>
            <option value={"desc"}>Desc</option>
          </select>
        </div>
        <Button className="mb-4" onClick={() => refetch()}>
          Search
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {isLoading ? (
          <>
            {Array.from({ length: 13 }).map((_, key) => (
              <ProductCardSkeleton key={key} />
            ))}
          </>
        ) : (
          <>
            {data?.products.map(({ id, title, price, sku, rating, images }) => (
              <ProductCard
                id={id}
                key={id}
                title={title}
                price={price}
                description={sku}
                rating={rating}
                thumbnail={images[0]}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
