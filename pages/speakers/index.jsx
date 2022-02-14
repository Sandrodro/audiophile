import NewProductCard from "../../src/components/NewProductCard/NewProductCard";
import CategoryHeader from "../../src/components/CategoryHeader/CategoryHeader";
import About from "../../src/components/About/About";
import ProductCards from "../../src/components/ProductCards/ProductCards";
import speaker1Img from "../../public/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import speaker2Img from "../../public/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import Link from "next/link";
import data from "../../public/data.json";

const pageData = data.filter((item) => item.category == "speakers").reverse();

function Speakers() {
  return (
    <main>
      <CategoryHeader category="SPEAKERS" />
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

export default Speakers;
