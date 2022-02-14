import { useRouter } from "next/router";
import data from "../../data.json";
import { useEffect, useState } from "react";
import NewProductCard from "../../src/components/NewProductCard/NewProductCard";
import Gallery from "../../src/components/Gallery/Gallery";
import Features from "../../src/components/Features/Features";
import About from "../../src/components/About/About";
import ProductCards from "../../src/components/ProductCards/ProductCards";
import Suggestions from "../../src/components/Suggestions/Suggestions";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, minus, selectCart } from "../../src/state/cartSlice";

function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const neededProduct = data.filter((item) => item.slug == slug);
    if (slug) {
      setProduct(neededProduct[0]);
    }
  }, [slug]);

  useEffect(() => {
    if (product && Object.keys(product).length) {
      setLoaded(true);
    }
  }, [product]);

  return (
    <main>
      {loaded ? (
        <>
          <NewProductCard
            headline={product.name}
            paragraph={product.description}
            left
            productPage
            price={product.price}
            imageUrl={product.image.desktop.substring(1)}
            dispatch={dispatch}
            add={add}
            remove={remove}
            minus={minus}
            slug={slug}
            product={product}
          />
          <Features features={product.features} box={product.includes} />
          <Gallery
            image1={product.gallery.first.desktop.substring(1)}
            image2={product.gallery.second.desktop.substring(1)}
            image3={product.gallery.third.desktop.substring(1)}
          />
          <Suggestions otherProducts={product.others} />
          <ProductCards />
          <About />
        </>
      ) : null}
    </main>
  );
}

export default ProductPage;
