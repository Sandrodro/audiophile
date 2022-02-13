import styled from "styled-components";
import Image from "next/image";

const GalleryContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 1100px;
  margin: 50px auto;
  gap: 25px;

  & img {
    border-radius: 10px;
  }
`;

const TwoImageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

function Gallery({ image1, image2, image3 }) {
  return (
    <GalleryContainer>
      <TwoImageContainer>
        <Image src={image1} width={445} height={280} />
        <Image src={image2} width={445} height={280} />
      </TwoImageContainer>
      <Image src={image3} width={635} height={592} />
    </GalleryContainer>
  );
}

export default Gallery;
