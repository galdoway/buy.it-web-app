import { useQuery } from "@tanstack/react-query";
import { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { GetProductsResponse } from "~/modules/home/types";
import Button from "~/shared/components/button";
import ProductCard from "~/shared/components/product-card";
import ProductCardSkeleton from "~/shared/components/product-card-skeleton";

export default function SearchProductsPage() {
  let [searchParams, setSearchParams] = useSearchParams();

  const { isLoading, data, refetch, isSuccess } = useQuery<GetProductsResponse>(
    {
      queryKey: ["SEARCH_PRODUCTS_QUERY"],
      queryFn: async () => {
        const resp = await fetch(
          `https://dummyjson.com/products/search?q=${searchParams.get("q")}`
        );
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      },
    }
  );

  function handleSearchForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    searchParams.set("q", e.currentTarget.productName.value);
    setSearchParams(searchParams);
    refetch();
  }

  return (
    <div>
      <div>
        <h6 className="font-display md:mb-0 text-xl mb-4 lg:mb-0 font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-[5rem]">
          Search a product...
        </h6>
        <form onSubmit={handleSearchForm}>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Product name..."
            className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
          />
          <div className="mt-2 ml-1">
            <Button type="submit">Search product</Button>
          </div>
        </form>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-2">
          {isLoading && (
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          )}
          {isSuccess &&
            data.products.map(
              ({ id, title, description, price, rating, images }) => (
                <ProductCard
                  id={id}
                  title={title}
                  description={description}
                  rating={rating}
                  key={id}
                  thumbnail={images[0]}
                  price={price}
                />
              )
            )
          }
        </div>
      </div>
    </div >
  );
}
