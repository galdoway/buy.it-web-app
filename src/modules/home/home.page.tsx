import ImageOverlay from "~/shared/components/image-overlay";
import LetterPullup from "~/shared/components/letter-pullup";
import ProductCard from "~/shared/components/product-card";

function HomePage() {
  return (
    <>
      <LetterPullup
        words="Most Wanted Products"
        className="text-xl mb-4 lg:mb-0"
      />
      <div className="grid grid-cols-2 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
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
    </>
  );
}

export default HomePage;