import { useQuery } from "@tanstack/react-query";
import ImageOverlay from "~/shared/components/image-overlay";
import LetterPullup from "~/shared/components/letter-pullup";
import ProductCard from "~/shared/components/product-card";
import ProductCardSkeleton from "~/shared/components/product-card-skeleton";

export interface GetProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  thumbnail: string;
  images: string[];
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
  qrCode: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}

function HomePage() {
  const { isLoading, data, isSuccess } = useQuery<GetProductsResponse>({
    queryKey: ["Products"],
    queryFn: async () => {
      const resp = await fetch(
        "https://dummyjson.com/products?limit=10&sortBy=rating&order=desc"
      );
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      return resp.json();
    },
  });

  if (!isSuccess) return <>Products Can't be Loaded...</>;

  return (
    <>
      <div>
        <LetterPullup
          words="Most Wanted Products"
          className="text-xl mb-4 lg:mb-0"
        />
        <div className="grid grid-cols-2 gap-4">
          {isLoading ? (
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          ) : (
            <>
              {data?.products.map(
                ({ id, title, price, sku, rating, images }) => (
                  <ProductCard
                    id={id}
                    key={id}
                    title={title}
                    price={price}
                    description={sku}
                    rating={rating}
                    thumbnail={images[0]}
                  />
                )
              )}
            </>
          )}
        </div>
      </div>
      <div>
        <LetterPullup words="Brands" className="text-xl mb-4 lg:mb-0 mt-2" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ImageOverlay
            title="Xbox"
            src="https://xxboxnews.blob.core.windows.net/prod/sites/2/2023/08/image004-04165e41841930c0754b-dd52b7ee8b2c45e09b17.png"
          />
          <ImageOverlay
            title="Nintendo"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3524ba70148279.5e9e1a288e349.png"
          />
          <ImageOverlay
            title="Anti Social Social Club"
            src="https://www.highsnobiety.com/static-assets/dato/1653561957-anti-social-social-club-assc-parent-company-owner.jpg"
          />
          <ImageOverlay
            title="Samsung"
            src="https://t4.ftcdn.net/jpg/05/21/77/85/360_F_521778573_b0R1SAHGq7KLN0oGWOmIuGhZVqtrJOc5.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
