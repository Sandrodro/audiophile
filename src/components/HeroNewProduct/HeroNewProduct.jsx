import styled from "styled-components"
import head1 from "../../../public/product/Head1.png"
import Image from "next/dist/client/image"
import SeeProductBtn from "../buttons/SeeProduct"

const HeroContainer = styled.section`
	background-color: ${(props) => props.theme.colors.black};
	color: ${(props) => props.theme.colors.whitest};

	& > div {
		border-top: 1px solid rgba(255, 255, 255, 0.2);
		margin: 0 auto;
		width: 1300px;
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

function HeroNewProduct({ text }) {
	return (
		<HeroContainer>
			<div>
				<div className="textContainer">
					<h3 className="overline">{text.announcement}</h3>
					<h1 className="productHeadline">{text.headline}</h1>
					<p className="body">{text.descr}</p>
					<SeeProductBtn>SEE PRODUCT</SeeProductBtn>
				</div>
				<Image src={head1} width={558} height={606} />
			</div>
		</HeroContainer>
	)
}

export default HeroNewProduct
