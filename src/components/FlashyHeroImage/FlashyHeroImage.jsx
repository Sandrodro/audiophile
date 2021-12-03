import styled from "styled-components"
import Image from "next/image"
import flashyHeroImage from "../../../public/product/flashy-hero.png"
import SeeProductBtn from "../buttons/SeeProduct"

const FlashyContainer = styled.section`
	color: ${(props) => props.theme.colors.whitest};

	& > div {
		margin: 0 auto;
		width: 1300px;
		background-color: ${(props) => props.theme.colors.brick};
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		gap: 150px;
		align-items: center;

		& .textContainer {
			width: 400px;
			display: flex;
			flex-flow: column nowrap;
			gap: 1rem;
			align-items: flex-start;

			& p {
				word-break: break-word;
			}
		}
	}
`

function FlashyHeroImage({ text }) {
	return (
		<FlashyContainer>
			<div>
				<Image src={flashyHeroImage} width={410} height={493} />
				<div className="textContainer">
					<h1 className="productHeadline">{text.headline}</h1>
					<p className="body">{text.descr}</p>
					<SeeProductBtn black>SEE PRODUCT</SeeProductBtn>
				</div>
			</div>
		</FlashyContainer>
	)
}

export default FlashyHeroImage
