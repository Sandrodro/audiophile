import NewProductCard from "../../src/components/NewProductCard/NewProductCard";
import headphoneImg from "../../public/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import headphone2Img from "../../public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import headphone3Img from "../../public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import CategoryHeader from "../../src/components/CategoryHeader/CategoryHeader";
import About from "../../src/components/About/About";
import ProductCards from "../../src/components/ProductCards/ProductCards";
import Link from "next/link";
import data from "../../data.json";

const pageData = data
  .filter((item) => item.category === "headphones")
  .reverse();

function Headphones() {
  return (
    <main>
      <CategoryHeader category="HEADPHONES" />
      {pageData.map((item, index) => {
        return (
          <Link href={`/product/${item.slug}`} key={index} passHref>
            <NewProductCard
              imageUrl={item.image.desktop.substring(1)}
              headline={item.name}
              paragraph={item.description}
              left={(index + 1) % 2 === 0 ? false : true}
            ></NewProductCard>
          </Link>
        );
      })}
      <ProductCards />
      <About />
    </main>
  );
}

export default Headphones;
