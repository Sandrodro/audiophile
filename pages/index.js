import HeroNewProduct from "../src/components/HeroNewProduct/HeroNewProduct";
import ProductCards from "../src/components/ProductCards/ProductCards";
import FlashyHeroImage from "../src/components/FlashyHeroImage/FlashyHeroImage";
import MediumFlashyHeroImage from "../src/components/MediumFlashyHeroImage/MediumFlashyHeroImage";
import btHeadphoneImage from "../public/product/bt-headphone.png";
import Image from "next/image";
import styles from "./index.module.css";
import SeeProductBtn from "../src/components/buttons/SeeProduct";
import About from "../src/components/About/About";
import Link from "next/link";

function Home() {
  return (
    <main>
      <HeroNewProduct
        text={{
          announcement: "NEW PRODUCT",
          headline: "XX99 MARK II HEADPHONES",
          descr:
            "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
        }}
        productId={"xx99-mark-two-headphones"}
      />
      <ProductCards />
      <Link href="/product/zx9-speaker" passHref>
        <FlashyHeroImage
          text={{
            headline: `ZX9\n SPEAKER`,
            descr:
              "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
          }}
        />
      </Link>
      <Link href="/product/zx7-speaker" passHref>
        <MediumFlashyHeroImage
          text={{
            headline: "ZX7 SPEAKER",
          }}
        />
      </Link>
      <Link href="/product/yx1-earphones">
        <div className={styles.twoImages}>
          <Image src={btHeadphoneImage} width={520} height={320} />
          <div className={styles.yx1Card}>
            <h2>YX1 EARPHONES</h2>
            <SeeProductBtn transparent>SEE PRODUCT</SeeProductBtn>
          </div>
        </div>
      </Link>
      <About />
    </main>
  );
}

export default Home;
